import ServiceLayout from '../../components/layout/ServiceLayout';
import { Layers } from 'lucide-react';

export default function ScalableArchitecture() {
  return (
    <ServiceLayout
      title='Scalable Architecture'
      description='Cloud-native infrastructure designed to grow seamlessly as your business traffic increases.'
      icon={Layers}
      includes={['Microservices Approach', 'Cloud Deployment Ready', 'Database Sharding capability', 'Load Balancing']}
    />
  );
}
