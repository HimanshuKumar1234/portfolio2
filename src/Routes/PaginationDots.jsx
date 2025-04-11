import React from 'react';
import './PaginationDots.css';

const PaginationDots = ({ routes, currentIndex, onDotClick }) => {
  // Map route paths to user-friendly names
  const getPageName = (route) => {
    switch(route) {
      case '/':
        return 'Home';
      case '/experiances':
        return 'Experience';
      case '/projects':
        return 'Projects';
      case '/achivement':
        return 'Achievements';
      case '/certificate':
        return 'Certificates';
      case '/contact':
        return 'Contact';
      default:
        return route.substring(1);
    }
  };

  return (
    <div className="pagination-dots">
      {routes.map((route, index) => (
        <div 
          key={index}
          className={`dot ${index === currentIndex ? 'active' : ''}`}
          onClick={() => onDotClick(index)}
          title={getPageName(route)}
        >
          <span className="dot-label">{getPageName(route)}</span>
        </div>
      ))}
    </div>
  );
};

export default PaginationDots;