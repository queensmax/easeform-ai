import Link from 'next/link';
import FuturisticButton from '../components/FuturisticButton';
import TechCard from '../components/TechCard';

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Intelligent Form Building<br />Made Simple</h1>
        <p>Create, manage, and analyze forms with the power of AI. EaseForm AI helps you build better forms faster, with intelligent suggestions and powerful analytics.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <FuturisticButton primary={true}>
            <Link href="/register">
              Start Free Trial
            </Link>
          </FuturisticButton>
          <FuturisticButton primary={false}>
            <Link href="#features">
              Learn More
            </Link>
          </FuturisticButton>
        </div>
      </div>
      
      <div id="features" className="section">
        <h2 className="section-title">Powerful Features</h2>
        
        <div className="grid">
          <TechCard 
            title="AI-Powered Form Validation"
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H4C2.89543 11 2 11.8954 2 13V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V13C22 11.8954 21.1046 11 20 11Z" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            <p>Our advanced AI algorithms analyze your forms in real-time, identifying potential errors and suggesting improvements before submission.</p>
          </TechCard>
          
          <TechCard 
            title="Intelligent Suggestions"
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            <p>Get smart recommendations for form fields, validation rules, and user experience improvements based on industry best practices.</p>
          </TechCard>
          
          <TechCard 
            title="Seamless Integration"
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 8H5C3.93913 8 2.92172 8.42143 2.17157 9.17157C1.42143 9.92172 1 10.9391 1 12C1 13.0609 1.42143 14.0783 2.17157 14.8284C2.92172 15.5786 3.93913 16 5 16H6" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12H18" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            <p>Easily integrate with your existing systems through our comprehensive API. Connect with CRM, payment processors, and other business tools.</p>
          </TechCard>
        </div>
      </div>
      
      <div className="section" style={{ backgroundColor: 'rgba(255, 107, 0, 0.05)' }}>
        <h2 className="section-title">How It Works</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--primary-color)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginRight: '2rem',
              boxShadow: '0 0 15px rgba(255, 107, 0, 0.3)'
            }}>1</div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Select a Template</h3>
              <p>Choose from our library of pre-built templates or start from scratch. Our templates are designed for various industries and use cases.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--primary-color)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginRight: '2rem',
              boxShadow: '0 0 15px rgba(255, 107, 0, 0.3)'
            }}>2</div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Customize with AI Assistance</h3>
              <p>Modify your form with our intuitive editor while our AI provides real-time suggestions for improvements and error prevention.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--primary-color)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginRight: '2rem',
              boxShadow: '0 0 15px rgba(255, 107, 0, 0.3)'
            }}>3</div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Deploy and Analyze</h3>
              <p>Share your form with users and collect responses. Our analytics dashboard provides insights into completion rates, common errors, and user behavior.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2 className="section-title">Ready to Transform Your Forms?</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Join thousands of businesses that use EaseForm AI to create better forms and improve their data collection process.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FuturisticButton primary={true} className="pulse-animation">
            <Link href="/register">
              Start Your Free Trial Today
            </Link>
          </FuturisticButton>
        </div>
      </div>
    </div>
  );
}
