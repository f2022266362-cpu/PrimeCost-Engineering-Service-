import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress bar over 700ms
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 35);

    // Fade out and disappear at 1.0s maximum or immediately on page load complete
    const handleLoad = () => {
      setProgress(100);
    };

    window.addEventListener('load', handleLoad);

    const fadeTimeout = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
      clearTimeout(fadeTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0F2446',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: progress === 100 ? 0 : 1,
        transition: 'opacity 0.3s ease-out',
        pointerEvents: progress === 100 ? 'none' : 'all'
      }}
    >
      {/* 3D Crane Silhouette SVG / Layout */}
      <div style={{ position: 'relative', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#C89A45" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ animation: 'floatRotate 4s ease-in-out infinite' }}
        >
          <path d="M3 21h18" />
          <path d="M19 21V7l-7-4-7 4v14" />
          <path d="M9 21V10h6v11" />
          <path d="M12 3v4" />
          <path d="M19 7h-5" />
          <path d="M5 7h5" />
        </svg>
        <h1 
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            color: '#ffffff', 
            fontWeight: '800', 
            fontSize: '2rem', 
            letterSpacing: '0.1em',
            marginTop: '1rem'
          }}
        >
          PRIMECOST
        </h1>
        <span 
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            color: 'rgba(255,255,255,0.6)', 
            fontSize: '0.75rem', 
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginTop: '0.25rem'
          }}
        >
          PRE-CONSTRUCTION ENGINEERING
        </span>
      </div>

      {/* Gold Loading bar */}
      <div 
        style={{ 
          width: '200px', 
          height: '2px', 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          borderRadius: '2px',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{ 
            width: `${progress}%`, 
            height: '100%', 
            backgroundColor: '#C89A45', 
            transition: 'width 0.1s ease-out' 
          }} 
        />
      </div>
    </div>
  );
}
