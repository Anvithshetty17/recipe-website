import React, { useState, useEffect } from 'react';
import './DarkLightToggle.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkLightToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark/light mode
  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
      return newMode;
    });
  };

  return (
    <div className="dark-light-toggle">
      <button onClick={handleToggle} className="toggle-btn">
        {/* Toggle the icons based on dark mode state */}
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      </button>
    </div>
  );
};

export default DarkLightToggle;
