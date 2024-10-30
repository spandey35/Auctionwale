"use client";

import React, { useEffect, useState } from 'react';

const WhatsAppIcon: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <a
        href="https://wa.me/919579094810?text=Hello!%20I%20would%20like%20to%20chat."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366', // WhatsApp green background
          //color: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill={isDarkMode ? '#FFFFFF' : '#000000'} // Dynamic color
        >
          <circle cx="16" cy="16" r="16" fill={isDarkMode ? '#FFFFFF' : '#000000'} />
          <path d="M16.041 2.667c-7.405 0-13.433 6.028-13.433 13.433 0 2.369.633 4.689 1.833 6.737l-1.958 5.63 5.817-1.924c1.922 1.161 4.122 1.779 6.306 1.779 7.405 0 13.434-6.028 13.434-13.433S23.446 2.667 16.041 2.667zm0 24.024c-1.995 0-3.956-.541-5.678-1.555l-.405-.24-3.458 1.144 1.161-3.336-.266-.418c-1.133-1.798-1.733-3.871-1.733-6.01 0-6.194 5.045-11.239 11.239-11.239 6.194 0 11.239 5.045 11.239 11.239s-5.045 11.239-11.239 11.239zm6.219-8.23c-.336-.168-1.995-.988-2.303-1.104-.309-.119-.537-.168-.766.168-.229.336-.878 1.103-1.076 1.332-.197.229-.395.252-.731.084-.336-.168-1.42-.52-2.704-1.656-1-.889-1.674-1.988-1.872-2.324-.197-.336-.021-.518.147-.686.153-.153.336-.395.504-.592.168-.197.224-.336.336-.557.111-.229.056-.418-.028-.586-.084-.168-.766-1.855-1.049-2.536-.276-.666-.56-.572-.766-.58-.197-.008-.42-.01-.645-.01-.224 0-.592.084-.9.418-.309.336-1.182 1.152-1.182 2.81 0 1.656 1.207 3.255 1.374 3.48.168.229 2.376 3.638 5.767 5.09.805.348 1.435.556 1.923.711.808.256 1.544.22 2.127.135.649-.096 1.995-.814 2.277-1.6.281-.784.281-1.455.197-1.6-.084-.144-.305-.229-.64-.395z" fill={isDarkMode ? '#000000' : '#FFFFFF'} />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppIcon;
