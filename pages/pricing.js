import { useState } from 'react';
import FuturisticButton from '../components/FuturisticButton';
import TechCard from '../components/TechCard';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  return (
    <div className="section">
      <h1 className="section-title">Simple, Transparent Pricing</h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Choose the plan that works best for your form building needs.
      </p>
      
      <div className="pricing-toggle">
        <span 
          className="toggle-label" 
          style={{ color: billingCycle === 'monthly' ? 'var(--primary-color)' : 'inherit' }}
        >
          Monthly Billing
        </span>
        
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={billingCycle === 'annual'} 
            onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          />
          <span className="toggle-slider"></span>
        </label>
        
        <span 
          className="toggle-label" 
          style={{ color: billingCycle === 'annual' ? 'var(--primary-color)' : 'inherit' }}
        >
          Annual Billing <span style={{ color: 'var(--primary-color)' }}>(Save 20%)</span>
        </span>
      </div>
      
      <div className="grid">
        <TechCard title="Basic Plan">
          <div className="pricing-header">
            <div className="pricing-price">
              {billingCycle === 'monthly' ? '$29.99' : '$287.90'}
            </div>
            <div className="pricing-period">
              {billingCycle === 'monthly' ? 'per form' : 'per year'}
            </div>
          </div>
          
          <p style={{ marginBottom: '2rem' }}>
            For general form validation and assistance
          </p>
          
          <div className="pricing-features">
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Access to 1 guide
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              AI-generated form filling examples
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Basic error checking
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email support
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <FuturisticButton primary={false}>
              Get Started
            </FuturisticButton>
          </div>
        </TechCard>
        
        <TechCard title="Premium Plan" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ 
            position: 'absolute', 
            top: '1.5rem', 
            right: '-3rem', 
            backgroundColor: 'var(--primary-color)',
            color: 'var(--text-color)',
            padding: '0.5rem 3rem',
            transform: 'rotate(45deg)',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}>
            Most Popular
          </div>
          
          <div className="pricing-header">
            <div className="pricing-price">
              {billingCycle === 'monthly' ? '$79.99' : '$767.90'}
            </div>
            <div className="pricing-period">
              {billingCycle === 'monthly' ? 'per month' : 'per year'}
            </div>
          </div>
          
          <p style={{ marginBottom: '2rem' }}>
            For advanced form validation and support
          </p>
          
          <div className="pricing-features">
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Access to 5 guides per month
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              AI logic verification
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              1000 API calls per month
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Common error prevention
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Priority support
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <FuturisticButton primary={true}>
              Get Started
            </FuturisticButton>
          </div>
        </TechCard>
        
        <TechCard title="Enterprise Plan">
          <div className="pricing-header">
            <div className="pricing-price">Custom</div>
            <div className="pricing-period">pricing</div>
          </div>
          
          <p style={{ marginBottom: '2rem' }}>
            For companies or high-demand users
          </p>
          
          <div className="pricing-features">
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Unlimited form access
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Detailed step-by-step filling instructions
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Advanced error analysis
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Dedicated support specialist
            </div>
            <div className="pricing-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Custom API integration
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <FuturisticButton primary={false}>
              Contact Sales
            </FuturisticButton>
          </div>
        </TechCard>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          All plans include a 14-day free trial. No credit card required.
        </p>
        <p>
          Need a custom solution? <a href="#" style={{ color: 'var(--primary-color)' }}>Contact our sales team</a>
        </p>
      </div>
    </div>
  );
}
