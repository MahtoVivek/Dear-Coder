# Dear Coder — Business Website

A modern, responsive, and SEO-friendly business website built to provide affordable digital solutions including web development, web design, app development, AI integration, and maintenance support.

## 🚀 Tech Stack

The application has been rebuilt using a modern architecture:
- **Framework:** React 18 + Vite 7
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** Wouter
- **Form Handling:** FormSubmit (No backend needed)
- **Icons:** Lucide React
- **Typography:** Sporting Grotesque (Fontshare)
- **Package Manager:** `pnpm`

## 🌟 Features
- **Highly Performant:** Built on Vite for lightning-fast hot-module reloading and optimized production bundles.
- **Dynamic Theming:** Seamless Dark/Light mode toggle backed by `localStorage` and system defaults.
- **Rich User Interface:** Incorporates fluid transitions, glassmorphic UI elements, staggering animations, and a customized 2-second Preloader.
- **Fully Responsive:** Tailored strictly via Tailwind utility classes to look superb on mobile, tablet, and desktop viewports.
- **Comprehensive Structure:** Over 16 internal SEO-friendly routes mapped for distinct web services, policies, and pricing tables.

---

## 🛠️ Local Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
If you don't have `pnpm` installed natively, you can install it globally via npm:
```bash
npm install -g pnpm
```

### Installation & Setup

1. **Clone the repository** (if you haven't already downlaoded the code):
```bash
git clone https://github.com/MahtoVivek/dear-coder.git
cd "Dear Coder"
```

2. **Install all dependencies:**
```bash
pnpm install
```

3. **Start the Development Server:**
```bash
pnpm run dev
```

4. **Build for Production:**
```bash
pnpm run build
```
This will compile the TypeScript code and generate a static `dist` bundle optimized for deployments.

---

## 📁 Project Structure

```text
Dear Coder/
├── legacy_html/                   # Old HTML/JS deployment files archive
├── public/
│   ├── images/                    # Premium generated visuals and project images
│   └── favicon.svg                # Site Favicon
├── src/
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, ServiceLayout
│   │   ├── sections/          # Hero, Pricing, Services, Portfolio, etc.
│   │   ├── FloatingActions    # Scroll-to-top and WhatsApp floating buttons
│   │   └── Preloader          # Animated initial load screen
│   ├── hooks/
│   │   └── use-theme.ts       # Hook for Dark/Light mode logic
│   ├── pages/                 # Full Wouter pages and dynamic services views
│   ├── App.tsx                # Main Routing Layer
│   ├── index.css              # Tailwind v4 globals and custom tokens
│   └── main.tsx               # Entry Script
├── index.html                     # Entry HTML point referencing Fontshare CDN
├── package.json                   # dependencies and build scripts
├── vite.config.ts                 # Vite setup
└── tsconfig.json                  # TS compiler rules
```

---

## 📞 Contact Form Integration
The underlying form uses **FormSubmit** which routes inputs automatically to `dearcoder.contact@gmail.com` using the native hidden configuration inputs. 
Upon successful post, the user is forwarded seamlessly directly to `/thank-you`.

---

## 📝 License
Free to use for personal and commercial projects.

Developed by **Dear Coder Team**
