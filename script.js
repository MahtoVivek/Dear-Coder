// ========================================
// DOM Elements
// ========================================

const loader = document.getElementById('loader');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');
const themeToggle = document.getElementById('themeToggle');
const navbar = document.getElementById('navbar');
const scrollToTopBtn = document.getElementById('scrollToTop');
const contactForm = document.getElementById('contactForm');

// ========================================
// Loading Animation
// ========================================

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
});

// ========================================
// Hamburger Menu Toggle
// ========================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Sticky Navbar on Scroll
// ========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// Theme Toggle (Dark/Light Mode)
// ========================================

const htmlElement = document.documentElement;
const themeKey = 'theme-preference';

// Check if user has a saved theme preference
function initializeTheme() {
    const savedTheme = localStorage.getItem(themeKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
        htmlElement.classList.add('light-theme');
        updateThemeIcon('sun');
    } else if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        htmlElement.classList.remove('light-theme');
        updateThemeIcon('moon');
    } else {
        updateThemeIcon('moon');
    }
}

function updateThemeIcon(iconType) {
    const icon = themeToggle.querySelector('i');
    if (iconType === 'sun') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('light-theme');
    
    if (htmlElement.classList.contains('light-theme')) {
        localStorage.setItem(themeKey, 'light');
        updateThemeIcon('sun');
    } else {
        localStorage.setItem(themeKey, 'dark');
        updateThemeIcon('moon');
    }
});

// Initialize theme on page load
initializeTheme();

// ========================================
// Scroll to Top Button
// ========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Contact Form Handling
// ========================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // For production, you would send this data to a server
        const formData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        };
        
        console.log('Form Data:', formData);
        
        showNotification('Message sent successfully! We\'ll reply shortly.', 'success');
        contactForm.reset();
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles dynamically
    const style = document.createElement('style');
    if (!document.getElementById('notification-styles')) {
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 1000;
                animation: slideInRight 0.3s ease-out;
                max-width: 300px;
            }
            
            .notification-success {
                background: #10b981;
            }
            
            .notification-error {
                background: #ef4444;
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getAnimationForElement(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll(
    '.service-card, .pricing-card, .portfolio-card, .testimonial-card, .domain-feature'
).forEach(el => {
    observer.observe(el);
});

function getAnimationForElement(element) {
    if (element.classList.contains('service-card')) {
        return 'fadeInUp 0.6s ease-out forwards';
    } else if (element.classList.contains('pricing-card')) {
        return 'fadeInUp 0.6s ease-out forwards';
    } else if (element.classList.contains('portfolio-card')) {
        return 'fadeInUp 0.6s ease-out forwards';
    } else if (element.classList.contains('testimonial-card')) {
        return 'fadeInUp 0.6s ease-out forwards';
    } else if (element.classList.contains('domain-feature')) {
        return 'slideInLeft 0.6s ease-out forwards';
    }
    return 'fadeInUp 0.6s ease-out forwards';
}

// ========================================
// Counter Animation for Stats
// ========================================

const stats = document.querySelectorAll('.stat h4');

function animateCounter(element) {
    const targetValue = parseInt(element.textContent);
    const duration = 1500;
    const increment = targetValue / (duration / 10);
    
    let currentValue = 0;
    
    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            element.textContent = targetValue + (element.textContent.includes('%') ? '%' : '+');
            clearInterval(counter);
        } else {
            if (element.textContent.includes('%')) {
                element.textContent = Math.floor(currentValue) + '%';
            } else if (element.textContent.includes('+')) {
                element.textContent = Math.floor(currentValue) + '+';
            } else {
                element.textContent = Math.floor(currentValue);
            }
        }
    }, 10);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stats.forEach(stat => {
                animateCounter(stat);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ========================================
// Portfolio Hover Effects
// ========================================

const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectName = card.querySelector('h3').textContent;
        showNotification(`Opening ${projectName}...`, 'success');
        
        // In production, you would navigate to the project details page
        // window.location.href = `/portfolio/${projectName.toLowerCase().replace(/\s+/g, '-')}`;
    });
});

// ========================================
// Pricing Card Selection
// ========================================

const pricingButtons = document.querySelectorAll('.pricing-card .btn');

pricingButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const planName = button.closest('.pricing-card').querySelector('h3').textContent;
        const planPrice = button.closest('.pricing-card').querySelector('.amount').textContent;
        
        showNotification(`You selected ${planName} (₹${planPrice})`, 'success');
        
        // Scroll to contact form
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            const offsetTop = contactSection.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }, 500);
    });
});

// ========================================
// Service Cards Information
// ========================================

const serviceCards = document.querySelectorAll('.service-card');

const serviceData = {
    'Web Development': 'Build fast, scalable, and secure websites with modern technologies.',
    'Web Design': 'Create stunning, user-friendly designs that convert visitors to customers.',
    'App Development & Design': 'Develop responsive mobile and progressive web apps.',
    'AI Integration': 'Integrate AI chatbots and smart features to enhance your business.',
    'SEO Optimization': 'Boost your online visibility and rank higher on search engines.',
    'Maintenance & Support': '24/7 ongoing support and updates for your digital presence.'
};

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const title = this.querySelector('h3').textContent;
        // Add subtle animation on hover (already handled in CSS)
    });
});

// ========================================
// WhatsApp Integration
// ========================================

const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Allow the link to work normally, but you can add custom behavior here if needed
        console.log('Opening WhatsApp...');
    });
});

// ========================================
// Mobile Menu Close on Outside Click
// ========================================

document.addEventListener('click', (e) => {
    const isClickInsideNav = navbar.contains(e.target);
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);
    
    if (!isClickInsideNav && !isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// Lazy Loading for Images (Future Enhancement)
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Keyboard Navigation Support
// ========================================

document.addEventListener('keydown', (e) => {
    // Close menu on Escape
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Scroll to top on Home key
    if (e.key === 'Home') {
        scrollToTopBtn.click();
    }
});

// ========================================
// Form Input Validation
// ========================================

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

nameInput?.addEventListener('blur', function() {
    if (this.value.trim().length < 2) {
        this.style.borderColor = 'var(--danger-color)';
    } else {
        this.style.borderColor = 'var(--border-color)';
    }
});

emailInput?.addEventListener('blur', function() {
    if (!isValidEmail(this.value)) {
        this.style.borderColor = 'var(--danger-color)';
    } else {
        this.style.borderColor = 'var(--border-color)';
    }
});

messageInput?.addEventListener('blur', function() {
    if (this.value.trim().length < 10) {
        this.style.borderColor = 'var(--danger-color)';
    } else {
        this.style.borderColor = 'var(--border-color)';
    }
});

// ========================================
// Performance Monitoring (Optional)
// ========================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page Load Time: ${pageLoadTime}ms`);
        }, 0);
    });
}

// ========================================
// Add Console Welcome Message
// ========================================

console.log('%c🚀 Welcome to Dear Coder!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cAn affordable digital solution for your business.', 'font-size: 14px; color: #ec4899;');
console.log('%cFor inquiries, contact: hello@dearcoder.com', 'font-size: 12px; color: #94a3b8;');
