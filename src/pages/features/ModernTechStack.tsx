import ServiceLayout from '../../components/layout/ServiceLayout';
import { Code2 } from 'lucide-react';

export default function ModernTechStack() {
  return (
    <ServiceLayout
      title='Modern Tech Stack'
      description='Leveraging the latest frameworks like React and Vite for scalable, future-proof applications.'
      icon={Code2}
      includes={['React Native / Next.js', 'Vite Bundler', 'Tailwind CSS', 'TypeScript Support']}
    />
  );
}
