import ServiceLayout from '../../components/layout/ServiceLayout';
import { ShieldCheck } from 'lucide-react';

export default function SecureByDefault() {
  return (
    <ServiceLayout
      title='Secure by Default'
      description='Enterprise-grade security protocols and best practices to keep your data and users safe.'
      icon={ShieldCheck}
      includes={['SSL/TLS Encryption', 'XSS & CSRF Protection', 'Secure Authentication', 'Regular Audits']}
    />
  );
}
