import { useState, useEffect } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`sase-header ${isScrolled ? 'sase-header--scrolled' : ''}`}
      role="banner"
    >
      <div className="sase-header__container container">
        <div className="sase-header__brand reveal reveal--scale">
          <Logo size={40} />
          <span className="sase-header__name">SASE</span>
          <span className="sase-header__tagline">Soluciones Avanzadas en Seguridad y Energía</span>
        </div>

        <nav id="main-navigation" className={`sase-header__nav ${isMobileMenuOpen ? 'sase-header__nav--open' : ''}`} aria-label="Navegación principal">
          <ul className="sase-header__list">
            {navLinks.map((link, index) => (
              <li key={link.href} className="sase-header__item reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
                <a
                  href={link.href}
                  className="sase-header__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="sase-header__item sase-header__item--cta reveal" style={{ transitionDelay: `${navLinks.length * 0.05}s` }}>
              <a href="#cotizacion" className="btn btn--primary sase-header__cta">
                Solicitar Cotización
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="sase-header__toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="sase-header__hamburger" aria-hidden="true">
            <span className={`sase-header__bar ${isMobileMenuOpen ? 'sase-header__bar--open' : ''}`}></span>
            <span className={`sase-header__bar ${isMobileMenuOpen ? 'sase-header__bar--open' : ''}`}></span>
            <span className={`sase-header__bar ${isMobileMenuOpen ? 'sase-header__bar--open' : ''}`}></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;