const Logo = ({ size = 48, className = '', _showText = true, variant = 'default' }) => {
  const logoSize = typeof size === 'number' ? `${size}px` : size;

  if (variant === 'image') {
    return (
      <img
        src="/Logo_SASE.png"
        alt="SASE - Soluciones Avanzadas en Seguridad y Energía"
        className={`sase-logo sase-logo--image ${className}`}
        width={size}
        height={size}
        style={{ width: logoSize, height: logoSize, flexShrink: 0 }}
      />
    );
  }

  return (
    <svg
      className={`sase-logo ${className}`}
      width={logoSize}
      height={logoSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ width: logoSize, height: logoSize, flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#164A78" />
          <stop offset="100%" stopColor="#0d3558" />
        </linearGradient>
        <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#69B52E" />
          <stop offset="100%" stopColor="#549025" />
        </linearGradient>
      </defs>

      <path
        d="M50 5 C30 5 12 18 12 38 C12 52 22 62 35 78 C40 84 45 88 50 93 C55 88 60 84 65 78 C78 62 88 52 88 38 C88 18 70 5 50 5 Z"
        fill="url(#shieldGradient)"
        stroke="none"
      />
      <path
        d="M50 5 C30 5 12 18 12 38 C12 52 22 62 35 78 C40 84 45 88 50 93 C55 88 60 84 65 78 C78 62 88 52 88 38 C88 18 70 5 50 5 Z"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1.5"
      />
      <path
        d="M50 28 L42 45 L48 45 L44 58 L50 52 L56 58 L52 45 L58 45 L50 28 Z"
        fill="url(#boltGradient)"
      />
      <path
        d="M50 28 L42 45 L48 45 L44 58 L50 52 L56 58 L52 45 L58 45 L50 28 Z"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.5"
      />
      <ellipse
        cx="38"
        cy="40"
        rx="2.5"
        ry="1.5"
        fill="rgba(255,255,255,0.25)"
      />
      <ellipse
        cx="62"
        cy="40"
        rx="2.5"
        ry="1.5"
        fill="rgba(255,255,255,0.25)"
      />
    </svg>
  );
};

export default Logo;