"use client";

import React, { useEffect, useState } from 'react';
 
// CSS for dynamic fill

const style = `

  .dynamic-fill {

    fill: white;

  }

`;
 
// WhatsAppIcon Component

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
<style>{style}</style>
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

          color: '#fff',

          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

        }}
>
<img

          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"

          alt="WhatsApp"

          style={{

            width: '32px',

            height: '32px',

            

          }}

        />
</a>
</div>

  );

};
 
export default WhatsAppIcon;


 