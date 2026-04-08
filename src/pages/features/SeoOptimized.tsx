import ServiceLayout from '../../components/layout/ServiceLayout';
import { Search } from 'lucide-react';

export default function SeoOptimized() {
  return (
    <ServiceLayout
      title='SEO Optimized'
      description='Built-in technical SEO optimization helps your website rank higher in search engine results.'
      icon={Search}
      includes={['Meta Tags Injection', 'Semantic HTML5', 'Sitemap Generation', 'Lighthouse Score Audit']}
    />
  );
}
