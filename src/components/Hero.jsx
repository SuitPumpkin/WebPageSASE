import Logo from './Logo';

const Hero = () => {
  return (
    <section id="inicio" className="sase-hero" role="region" aria-labelledby="hero-title">
      <div className="sase-hero__background" aria-hidden="true">
        <div className="sase-hero__pattern"></div>
        <div className="sase-hero__gradient"></div>
      </div>

      <div className="container">
        <div className="sase-hero__content">
          <div className="sase-hero__text reveal reveal--left">
            <span className="sase-hero__badge reveal reveal-delay-1">
              <Logo size={20} />
              Soluciones Avanzadas en Seguridad y Energía
            </span>
            <h1 id="hero-title" className="sase-hero__title reveal reveal-delay-2">
              Protegemos tu patrimonio con <span className="text-gradient">tecnología de vanguardia</span>
            </h1>
            <p className="sase-hero__description reveal reveal-delay-3">
              Especialistas en sistemas de seguridad electrónica, instalaciones eléctricas
              y energías renovables. Más de 15 años brindando tranquilidad y eficiencia
              a hogares y empresas en todo el país.
            </p>
            <div className="sase-hero__actions reveal reveal-delay-4">
              <a href="#cotizacion" className="btn btn--primary btn--lg sase-hero__btn-primary">
                Solicitar Cotización
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#servicios" className="btn btn--secondary btn--lg sase-hero__btn-secondary">
                Ver Servicios
              </a>
            </div>
            <div className="sase-hero__stats reveal reveal-delay-5">
              <div className="sase-hero__stat">
                <span className="sase-hero__stat-number">15+</span>
                <span className="sase-hero__stat-label">Años de experiencia</span>
              </div>
              <div className="sase-hero__stat">
                <span className="sase-hero__stat-number">2,500+</span>
                <span className="sase-hero__stat-label">Proyectos completados</span>
              </div>
              <div className="sase-hero__stat">
                <span className="sase-hero__stat-number">98%</span>
                <span className="sase-hero__stat-label">Clientes satisfechos</span>
              </div>
            </div>
          </div>

          <div className="sase-hero__visual reveal reveal--right" aria-hidden="true">
            <div className="sase-hero__image-wrapper">
              <div className="sase-hero__image-placeholder">
                <div className="sase-hero__placeholder-content">
                  <Logo size={80} className="sase-hero__placeholder-logo pulse" />
                  <p className="sase-hero__placeholder-text">Instalación profesional de sistemas de seguridad</p>
                </div>
                <div className="sase-hero__floating-cards">
                  <div className="sase-hero__float-card sase-hero__float-card--1 reveal reveal-delay-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#69B52E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M4 8h16M12 17v-5" />
                    </svg>
                    <span>Cámaras IP 4K</span>
                  </div>
                  <div className="sase-hero__float-card sase-hero__float-card--2 reveal reveal-delay-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#69B52E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    <span>Paneles Solares</span>
                  </div>
                  <div className="sase-hero__float-card sase-hero__float-card--3 reveal reveal-delay-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#69B52E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Control Acceso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sase-hero__scroll-indicator" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;