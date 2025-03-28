import Link from 'next/link';
import FuturisticButton from '../components/FuturisticButton';
import TechCard from '../components/TechCard';

export default function Documents() {
  return (
    <div className="section">
      <h1 className="section-title">Your Documents</h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
        Manage and access your form templates and completed forms.
      </p>
      
      <div className="tab-container">
        <div className="tabs">
          <div className="tab active">Templates</div>
          <div className="tab">Completed Forms</div>
          <div className="tab">Shared With Me</div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div className="search-container" style={{ position: 'relative', width: '300px' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search templates..." 
              style={{ paddingLeft: '2.5rem' }}
            />
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.7 }}
            >
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <FuturisticButton primary={true}>
            New Template
          </FuturisticButton>
        </div>
        
        <div className="grid">
          <TechCard>
            <div style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h3 style={{ marginBottom: '0.5rem' }}>Tax Form W-9</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              Last edited: Mar 15, 2025
            </p>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <FuturisticButton primary={false} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Edit
              </FuturisticButton>
              <FuturisticButton primary={false} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Share
              </FuturisticButton>
            </div>
          </TechCard>
          
          <TechCard>
            <div style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h3 style={{ marginBottom: '0.5rem' }}>Employment Application</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              Last edited: Mar 10, 2025
            </p>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <FuturisticButton primary={false} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Edit
              </FuturisticButton>
              <FuturisticButton primary={false} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Share
              </FuturisticButton>
            </div>
          </TechCard>
          
          <TechCard>
            <div style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h3 style={{ marginBottom: '0.5rem' }}>Rental Agreement</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              Last edited: Feb 28, 2025
            </p>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <FuturisticButton primary={false} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Edit
              </FuturisticButton>
              <FuturisticButton primary={false} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Share
              </FuturisticButton>
            </div>
          </TechCard>
          
          <TechCard>
            <div style={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center',
              border: '2px dashed var(--border-color)',
              borderRadius: '0.5rem',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(255, 107, 0, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12H19" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>Create New Template</p>
            </div>
          </TechCard>
        </div>
      </div>
    </div>
  );
}
