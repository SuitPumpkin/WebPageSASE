import Logo from './Logo';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const footerLinks = {
    servicios: [
      { label: 'Videovigilancia CCTV', href: '#servicios' },
      { label: 'Control de Acceso', href: '#servicios' },
      { label: 'Energía Solar Fotovoltaica', href: '#servicios' },
      { label: 'Instalaciones Eléctricas', href: '#servicios' },
      { label: 'Alarmas y Detección', href: '#servicios' },
      { label: 'Automatización y Domótica', href: '#servicios' },
    ],
    empresa: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Experiencia', href: '#nosotros' },
      { label: 'Certificaciones', href: '#nosotros' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Blog', href: '#blog' },
      { label: 'Trabaja con nosotros', href: '#empleos' },
    ],
    soporte: [
      { label: 'Centro de ayuda', href: '#ayuda' },
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Descargas y manuales', href: '#descargas' },
      { label: 'Garantías', href: '#garantias' },
      { label: 'Soporte técnico 24/7', href: 'tel:+56987654321' },
      { label: 'Política de privacidad', href: '#politica-privacidad' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { name: 'Facebook', href: 'https://facebook.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )},
    { name: 'Instagram', href: 'https://instagram.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )},
    { name: 'YouTube', href: 'https://youtube.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )},
  ];

  const [footerRef] = useIntersectionObserver({ rootMargin: '0px 0px -50px 0px' });

  return (
    <footer ref={footerRef} className="sase-footer reveal" role="contentinfo">
      <div className="container">
        <div className="sase-footer__grid">
          <div className="sase-footer__brand reveal reveal-delay-1">
            <Logo size={56} className="sase-footer__logo" />
            <h2 className="sase-footer__name">SASE</h2>
            <p className="sase-footer__tagline">Soluciones Avanzadas en Seguridad y Energía</p>
            <p className="sase-footer__description">
              Más de 15 años protegiendo hogares y empresas con tecnología de vanguardia
              y un compromiso inquebrantable con la calidad y la seguridad.
            </p>
            <div className="sase-footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="sase-footer__social-link reveal"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="sase-footer__nav reveal reveal-delay-2" aria-label="Enlaces de servicios">
            <h3 className="sase-footer__heading">Servicios</h3>
            <ul className="sase-footer__list">
              {footerLinks.servicios.map((link, index) => (
                <li key={link.label} style={{ transitionDelay: `${index * 0.03}s` }}>
                  <a href={link.href} className="sase-footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="sase-footer__nav reveal reveal-delay-3" aria-label="Enlaces de empresa">
            <h3 className="sase-footer__heading">Empresa</h3>
            <ul className="sase-footer__list">
              {footerLinks.empresa.map((link, index) => (
                <li key={link.label} style={{ transitionDelay: `${index * 0.03}s` }}>
                  <a href={link.href} className="sase-footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="sase-footer__nav reveal reveal-delay-4" aria-label="Enlaces de soporte">
            <h3 className="sase-footer__heading">Soporte</h3>
            <ul className="sase-footer__list">
              {footerLinks.soporte.map((link, index) => (
                <li key={link.label} style={{ transitionDelay: `${index * 0.03}s` }}>
                  <a href={link.href} className="sase-footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sase-footer__contact reveal reveal-delay-5">
            <h3 className="sase-footer__heading">Contacto Directo</h3>
            <address className="sase-footer__address">
              <div className="sase-footer__contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Av. Providencia 1234, Of. 501<br />Providencia, Santiago, Chile</span>
              </div>
              <div className="sase-footer__contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+56229401234" className="sase-footer__link">+56 2 2940 1234</a>
              </div>
              <div className="sase-footer__contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:contacto@sase.cl" className="sase-footer__link">contacto@sase.cl</a>
              </div>
            </address>
          </div>
        </div>

        <div className="sase-footer__bottom reveal reveal-delay-6">
          <div className="sase-footer__divider"></div>
          <div className="sase-footer__copyright">
            <p>&copy; {CURRENT_YEAR} SASE - Soluciones Avanzadas en Seguridad y Energía. Todos los derechos reservados.</p>
            <p className="sase-footer__legal">
              <a href="#terminos">Términos y Condiciones</a>
              <span className="sase-footer__separator" aria-hidden="true">·</span>
              <a href="#politica-privacidad">Política de Privacidad</a>
              <span className="sase-footer__separator" aria-hidden="true">·</span>
              <a href="#cookies">Cookies</a>
            </p>
          </div>
          <div className="sase-footer__certifications">
            <span className="sase-footer__cert-label">Certificados:</span>
            <span className="sase-footer__cert-badges">
              <span className="sase-footer__cert-badge">ISO 9001</span>
              <span className="sase-footer__cert-badge">SEC</span>
              <span className="sase-footer__cert-badge">OSHA</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;