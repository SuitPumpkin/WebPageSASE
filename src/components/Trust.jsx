import Logo from './Logo';
import { useIntersectionObserver, Counter } from '../hooks/useIntersectionObserver';

const Trust = () => {
  const values = [
    {
      id: 1,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años en el mercado resolviendo proyectos de alta complejidad para clientes residenciales, comerciales e industriales.',
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Atención Profesional',
      description: 'Equipo técnico certificado que acompaña en cada etapa: asesoría, diseño, instalación, puesta en marcha y post-venta.',
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <path d="M12 22V12M22 8.5L12 15.5L2 8.5" />
        </svg>
      ),
      title: 'Soluciones Integrales',
      description: 'Unificamos seguridad, energía y automatización en un solo proveedor, garantizando compatibilidad y un único punto de contacto.',
    },
    {
      id: 4,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Respuesta Inmediata',
      description: 'Soporte técnico 24/7 con tiempos de respuesta garantizados. Monitoreo remoto y asistencia en sitio según SLA acordado.',
    },
  ];

  const certifications = [
    { name: 'ISO 9001', desc: 'Gestión de calidad' },
    { name: 'SEC', desc: 'Certificación eléctrica' },
    { name: 'OSHA', desc: 'Seguridad laboral' },
    { name: 'IEC 62443', desc: 'Ciberseguridad industrial' },
  ];

  const stats = [
    { count: 15, suffix: '+', label: 'Años de experiencia' },
    { count: 2500, suffix: '+', label: 'Proyectos ejecutados' },
    { count: 98, suffix: '%', label: 'Satisfacción cliente' },
    { count: 42, suffix: '', label: 'Profesionales certificados' },
  ];

  const [trustRef] = useIntersectionObserver({ rootMargin: '0px 0px -100px 0px' });
  const [statsRef, statsVisible] = useIntersectionObserver({ rootMargin: '0px 0px -50px 0px' });

  return (
    <>
      <section ref={trustRef} id="nosotros" className="sase-trust section reveal" aria-labelledby="trust-title">
        <div className="container">
          <header className="section-header reveal reveal-delay-1">
            <span className="section-header__tagline">Por qué elegir SASE</span>
            <h2 id="trust-title" className="section-header__title">Compromiso, calidad y confianza en cada proyecto</h2>
            <p className="section-header__description">
              Nuestra reputación se construye sobre la base de resultados medibles,
              transparencia total y relaciones a largo plazo con cada cliente.
            </p>
          </header>

          <div className="sase-trust__grid reveal reveal-delay-2">
            {values.map((value, index) => (
              <article
                key={value.id}
                className="sase-trust__card card reveal reveal-delay-3"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="sase-trust__icon">{value.icon}</div>
                <h3 className="sase-trust__title">{value.title}</h3>
                <p className="sase-trust__description">{value.description}</p>
              </article>
            ))}
          </div>

          <div className="sase-trust__certifications reveal reveal-delay-4">
            <h3 className="sase-trust__cert-title">Certificaciones y Estándares</h3>
            <div className="sase-trust__cert-list">
              {certifications.map((cert) => (
                <div key={cert.name} className="sase-trust__cert-item">
                  <span className="sase-trust__cert-name">{cert.name}</span>
                  <span className="sase-trust__cert-desc">{cert.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="sase-stats section" aria-labelledby="stats-title">
        <div className="container">
          <div className="sase-stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="sase-stats__item reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                {index === 0 && <Logo size={56} className="sase-stats__logo" />}
                <Counter
                  end={stat.count}
                  duration={2000}
                  start={0}
                  isActive={statsVisible}
                  suffix={stat.suffix}
                  className="sase-stats__number"
                />
                <div className="sase-stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trust;