const Logo = ({ size = 48, className = '' }) => {
  const logoSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src="/Shield_SASE.png"
      alt="SASE - Soluciones Avanzadas en Seguridad y Energía"
      className={className}
      width={size}
      height={size}
      style={{ width: logoSize, height: logoSize, flexShrink: 0 }}
    />
  );
};

export default Logo;