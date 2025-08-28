import React, { useEffect, useState } from 'react';
import './PageTransition.css';

const PageTransition = ({ children, isVisible = true }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Simulate loading delay for smooth transition
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(false);
    }
  }, [isVisible]);

  return (
    <div className={`page-transition ${isLoaded ? 'loaded' : ''}`}>
      <div className="transition-overlay">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-text">Loading...</div>
        </div>
      </div>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
