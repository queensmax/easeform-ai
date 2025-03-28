import FuturisticButton from '../components/FuturisticButton';
import TechCard from '../components/TechCard';

export default function Privacy() {
  return (
    <div className="section">
      <h1 className="section-title">Privacy Policy</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Last Updated: March 21, 2025
      </p>
      
      <TechCard style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Introduction</h2>
          <p style={{ marginBottom: '1rem' }}>
            At EaseForm AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you use our service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not
            access the site.
          </p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>
            EaseForm AI is designed with privacy at its core. We collect minimal information necessary to provide our services:
          </p>
          
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Account Information</h3>
          <p style={{ marginBottom: '1rem' }}>
            When you create an account, we collect your email address and password. You may optionally provide your name and other profile
            information.
          </p>
          
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Payment Information</h3>
          <p style={{ marginBottom: '1rem' }}>
            If you subscribe to a paid plan, our payment processor collects payment information. EaseForm AI does not store your complete credit card
            details.
          </p>
          
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Usage Information</h3>
          <p style={{ marginBottom: '1rem' }}>
            We collect information about how you use our service, including the forms you create, edit, and share. This helps us improve our service
            and provide personalized assistance.
          </p>
          
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Technical Information</h3>
          <p style={{ marginBottom: '1rem' }}>
            We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and
            referring URLs. We use this information to maintain and improve our service.
          </p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>How We Use Your Information</h2>
          <p style={{ marginBottom: '1rem' }}>
            We use the information we collect to:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Provide, maintain, and improve our services</li>
            <li style={{ marginBottom: '0.5rem' }}>Process transactions and send related information</li>
            <li style={{ marginBottom: '0.5rem' }}>Send administrative messages, updates, and security alerts</li>
            <li style={{ marginBottom: '0.5rem' }}>Respond to your comments, questions, and requests</li>
            <li style={{ marginBottom: '0.5rem' }}>Personalize your experience and provide content recommendations</li>
            <li style={{ marginBottom: '0.5rem' }}>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Information Sharing and Disclosure</h2>
          <p style={{ marginBottom: '1rem' }}>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
            <li style={{ marginBottom: '0.5rem' }}>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
            <li style={{ marginBottom: '0.5rem' }}>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of EaseForm AI or others</li>
            <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Data Security</h2>
          <p style={{ marginBottom: '1rem' }}>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be
            aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially
            acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Your Rights and Choices</h2>
          <p style={{ marginBottom: '1rem' }}>
            You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your
            information. To exercise these rights, please contact us at privacy@easeformai.com.
          </p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Changes to This Privacy Policy</h2>
          <p style={{ marginBottom: '1rem' }}>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and
            updating the "Last Updated" date at the top. You are advised to review this privacy policy periodically for any changes.
          </p>
        </div>
        
        <div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Contact Us</h2>
          <p style={{ marginBottom: '1rem' }}>
            If you have any questions about this privacy policy, please contact us at:
          </p>
          <p>
            EaseForm AI<br />
            privacy@easeformai.com<br />
            123 Tech Plaza, Suite 400<br />
            San Francisco, CA 94105
          </p>
        </div>
      </TechCard>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <FuturisticButton primary={false}>
          Download PDF Version
        </FuturisticButton>
      </div>
    </div>
  );
}
