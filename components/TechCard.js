import { useEffect, useState } from 'react';

export default function TechCard({ children, title, icon, className = '', style = {} }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyle = {
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    ...style
  };
  
  return (
    <div 
      className={`card tech-card ${className}`}
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div className="tech-card-icon" style={{ 
          color: 'var(--primary-color)',
          marginBottom: '1rem',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}>
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className="tech-card-title" style={{ 
          marginBottom: '1rem',
          position: 'relative',
          display: 'inline-block'
        }}>
          {title}
          <span className="title-underline" style={{
            position: 'absolute',
            bottom: '-5px',
            left: '0',
            width: isHovered ? '100%' : '0',
            height: '2px',
            backgroundColor: 'var(--primary-color)',
            transition: 'width 0.3s ease'
          }}></span>
        </h3>
      )}
      
      <div className="tech-card-content">
        {children}
      </div>
      
      <div className="tech-card-border" style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        pointerEvents: 'none',
        borderRadius: '0.5rem',
        border: '1px solid',
        borderColor: isHovered ? 'var(--primary-color)' : 'var(--border-color)',
        transition: 'border-color 0.3s ease'
      }}></div>
      
      <div className="tech-card-corner top-left" style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '10px',
        height: '10px',
        borderTop: isHovered ? '2px solid var(--primary-color)' : '0px solid transparent',
        borderLeft: isHovered ? '2px solid var(--primary-color)' : '0px solid transparent',
        transition: 'all 0.3s ease',
        opacity: isHovered ? 1 : 0
      }}></div>
      
      <div className="tech-card-corner top-right" style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '10px',
        height: '10px',
        borderTop: isHovered ? '2px solid var(--primary-color)' : '0px solid transparent',
        borderRight: isHovered ? '2px solid var(--primary-color)' : '0px solid transparent',
        transition: 'all 0.3s ease',
        opacity: isHovered ? 1 : 0
      }}></div>
      
      <div className="tech-card-corner bottom-left" style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '10px',
        height: '10px',
        borderBottom: isHovered ? '2px solid var(--primary-color)' : '0px solid transparent',
        borderLeft: isHovered ? '2px solid var(--primary-color)' : '0px solid transparent',
        transition: 'all 0.3s ease',
        opacity: isHovered ? 1 : 0
      }}></div>
      
      <div className="tech-card-corner bottom-right" style={{
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '10px',
        height: '10px',
        borderBottom: isHovered ? '2px solid var(--primary-color)' : '0px solid transparent',
        borderRight: isHovered ? '2px solid var(--primary-color)' : '0px solid transparent',
        transition: 'all 0.3s ease',
        opacity: isHovered ? 1 : 0
      }}></div>
    </div>
  );
}
