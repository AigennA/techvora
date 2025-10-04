const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Modern Tech Circuit Design */}
      <defs>
        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      
      {/* Main T Shape with Circuit Lines */}
      <path
        d="M30 20 H70 V30 H55 V70 H45 V30 H30 Z"
        fill="url(#techGradient)"
      />
      
      {/* Circuit Nodes */}
      <circle cx="30" cy="25" r="3" fill="hsl(var(--accent))" />
      <circle cx="70" cy="25" r="3" fill="hsl(var(--accent))" />
      <circle cx="50" cy="70" r="3" fill="hsl(var(--primary))" />
      
      {/* Tech Lines */}
      <rect x="25" y="45" width="10" height="2" fill="hsl(var(--primary))" opacity="0.5" />
      <rect x="65" y="45" width="10" height="2" fill="hsl(var(--primary))" opacity="0.5" />
      <rect x="48" y="75" width="4" height="10" fill="hsl(var(--accent))" opacity="0.5" />
    </svg>
  );
};

export default Logo;
