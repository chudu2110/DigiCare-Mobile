import React from 'react';

export const LandingIllustration: React.FC = () => (
  <svg className="gender-poster" viewBox="0 0 552 423" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="femaleRing" x1="180" y1="250" x2="260" y2="330" gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--female-start)"/>
        <stop offset="1" stopColor="var(--female-end)"/>
      </linearGradient>
      <linearGradient id="maleRing" x1="310" y1="170" x2="410" y2="110" gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--male-start)"/>
        <stop offset="1" stopColor="var(--male-end)"/>
      </linearGradient>
      <radialGradient id="posterGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320 210) scale(160 120)">
        <stop stopColor="#FFFFFF" stopOpacity="var(--glow-opacity)"/>
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
      </radialGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    

    {/* Base illustration */}
    <path d="M515.5 422.5H36.5C16.8939 422.5 1 405.606 1 386V36.5C1 16.8939 16.8939 1 36.5 1H515.5C535.106 1 551 16.8939 551 36.5V386C551 405.606 535.106 422.5 515.5 422.5Z" fill="#f8fafc"/>
    <path d="M515.5 422.5H36.5C16.8939 422.5 1 405.606 1 386V36.5C1 16.8939 16.8939 1 36.5 1H515.5C535.106 1 551 16.8939 551 36.5V386C551 405.606 535.106 422.5 515.5 422.5Z" stroke="#e2e8f0" strokeWidth="2"/>
    <path d="M12 28H538V108C538 117.941 529.941 126 520 126H30C20.0589 126 12 117.941 12 108V28Z" fill="#FFFFFF"/>
    <rect x="36" y="55" width="60" height="8" rx="4" fill="#e2e8f0"/>
    <rect x="454" y="55" width="60" height="8" rx="4" fill="#e2e8f0"/>
    <g opacity="0.95">
      <ellipse cx="320" cy="210" rx="170" ry="125" fill="url(#posterGlow)"/>
      <g className="stack-light">
        <g filter="url(#softGlow)" className="female-symbol">
          <circle cx="240" cy="270" r="60" fill="#ffffff" fillOpacity="0.06"/>
          <circle cx="240" cy="270" r="60" stroke="url(#femaleRing)" strokeWidth="20"/>
          <line x1="240" y1="340" x2="240" y2="404" stroke="url(#femaleRing)" strokeWidth="20" strokeLinecap="round"/>
          <line x1="215" y1="378" x2="265" y2="378" stroke="url(#femaleRing)" strokeWidth="20" strokeLinecap="round"/>
        </g>
        <g filter="url(#softGlow)" className="male-symbol">
          <circle cx="340" cy="200" r="60" fill="#ffffff" fillOpacity="0.06"/>
          <circle cx="340" cy="200" r="60" stroke="url(#maleRing)" strokeWidth="20"/>
          <g transform="rotate(-45 340 200)">
            <line x1="400" y1="200" x2="472" y2="200" stroke="url(#maleRing)" strokeWidth="20" strokeLinecap="round"/>
            <line x1="492" y1="200" x2="462" y2="182" stroke="url(#maleRing)" strokeWidth="16" strokeLinecap="round"/>
            <line x1="492" y1="200" x2="462" y2="218" stroke="url(#maleRing)" strokeWidth="16" strokeLinecap="round"/>
          </g>
        </g>
      </g>
      <g className="stack-dark">
        <g filter="url(#softGlow)" className="male-symbol">
          <circle cx="340" cy="200" r="60" fill="#ffffff" fillOpacity="0.06"/>
          <circle cx="340" cy="200" r="60" stroke="url(#maleRing)" strokeWidth="20"/>
          <g transform="rotate(-45 340 200)">
            <line x1="400" y1="200" x2="472" y2="200" stroke="url(#maleRing)" strokeWidth="20" strokeLinecap="round"/>
            <line x1="492" y1="200" x2="462" y2="182" stroke="url(#maleRing)" strokeWidth="16" strokeLinecap="round"/>
            <line x1="492" y1="200" x2="462" y2="218" stroke="url(#maleRing)" strokeWidth="16" strokeLinecap="round"/>
          </g>
        </g>
        <g filter="url(#softGlow)" className="female-symbol">
          <circle cx="240" cy="270" r="60" fill="#ffffff" fillOpacity="0.06"/>
          <circle cx="240" cy="270" r="60" stroke="url(#femaleRing)" strokeWidth="20"/>
          <line x1="240" y1="340" x2="240" y2="404" stroke="url(#femaleRing)" strokeWidth="20" strokeLinecap="round"/>
          <line x1="215" y1="378" x2="265" y2="378" stroke="url(#femaleRing)" strokeWidth="20" strokeLinecap="round"/>
        </g>
      </g>
      <circle cx="290" cy="236" r="22" fill="#ffffff" fillOpacity="0.08"/>
    </g>
    
  </svg>
);