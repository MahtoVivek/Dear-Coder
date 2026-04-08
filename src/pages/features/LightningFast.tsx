import ServiceLayout from '../../components/layout/ServiceLayout';
import { Rocket } from 'lucide-react';

export default function LightningFast() {
  return (
    <ServiceLayout
      title='Lightning Fast'
      description='Built for speed with modern technologies to ensure instant loading times and smooth user experiences.'
      icon={Rocket}
      includes={['Optimized Assets', 'CDN Integration', 'Lazy Loading', 'Minified Source Code']}
    />
  );
}
