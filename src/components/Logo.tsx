function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Jackie Clarke</title>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8892AF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#CCD6F6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g>
        {/* Letter J */}
        <path
          d="M 25 15 Q 25 85, 50 85 Q 75 85, 75 65"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="8"
        >
          <animate
            attributeName="stroke-width"
            values="8;10;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx="75"
          cy="15"
          r="8"
          fill="url(#grad1)"
        >
          <animate
            attributeName="r"
            values="8;10;8"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Letter C */}
        <path
          d="M 65 25 Q 25 50, 65 75"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="8"
        >
          <animate
            attributeName="stroke-width"
            values="8;10;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Additional Animations */}
        <circle cx="25" cy="25" r="5" fill="#CCD6F6">
          <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="75" r="5" fill="#CCD6F6">
          <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <polygon points="50,10 60,30 40,30" fill="#CCD6F6">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 20"
            to="360 50 20"
            dur="4s"
            repeatCount="indefinite"
          />
        </polygon>
        <polygon points="30,90 40,70 20,70" fill="#CCD6F6">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 30 80"
            to="360 30 80"
            dur="4s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Glowing Effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#CCD6F6"
          strokeWidth="2"
          filter="url(#glow)"
        >
          <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

export default Logo;