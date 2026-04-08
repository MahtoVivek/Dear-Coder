import ServiceLayout from '../../components/layout/ServiceLayout';
import { Headset } from 'lucide-react';

export default function Support247() {
  return (
    <ServiceLayout
      title='24/7 Support'
      description='Dedicated technical support team available around the clock to resolve your issues promptly.'
      icon={Headset}
      includes={['WhatsApp & Email Support', 'Dedicated Account Manager', 'Priority Bug Fixing', 'Daily Backups']}
    />
  );
}
