import { useEffect } from 'react';

export default function FuturisticButton({ children, primary = true, onClick, className = '', style = {} }) {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const buttons = document.querySelectorAll('.futuristic-button');
      
      buttons.forEach(button => {
        button.addEventListener('mousemove', e => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          button.style.setProperty('--x', `${x}px`);
          button.style.setProperty('--y', `${y}px`);
        });
      });
    }
  }, []);
  
  const baseStyle = {
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    ...style
  };
  
  return (
    <button 
      className={`button ${primary ? 'button-primary' : 'button-secondary'} futuristic-button ${className}`}
      onClick={onClick}
      style={baseStyle}
    >
      <span className="button-content">{children}</span>
      <span className="button-glow"></span>
      <style jsx>{`
        .futuristic-button {
          --x: 0px;
          --y: 0px;
        }
        
        .button-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle 80px at var(--x) var(--y),
            rgba(255, 255, 255, 0.2) 0%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .futuristic-button:hover .button-glow {
          opacity: 1;
        }
        
        .futuristic-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.7s;
        }
        
        .futuristic-button:hover::before {
          left: 100%;
        }
        
        .button-primary.futuristic-button {
          box-shadow: 0 0 15px rgba(255, 107, 0, 0.3);
        }
        
        .button-primary.futuristic-button:hover {
          box-shadow: 0 0 25px rgba(255, 107, 0, 0.5);
        }
        
        .button-secondary.futuristic-button:hover {
          border-color: var(--primary-color);
          box-shadow: 0 0 15px rgba(255, 107, 0, 0.2);
        }
      `}</style>
    </button>
  );
}
