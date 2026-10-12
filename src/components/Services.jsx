import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M4 8h16M12 17v-5" />
        </svg>
      ),
      title: 'Videovigilancia CCTV',
      description: 'Sistemas de cámaras IP de alta definición con visión nocturna, detección de movimiento y acceso remoto desde cualquier dispositivo.',
      features: ['Cámaras 4K/8MP', 'Visión nocturna 30m', 'Grabación en la nube', 'App móvil iOS/Android'],
      cta: 'Ver detalles',
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Control de Acceso',
      description: 'Soluciones biométricas, tarjetas de proximidad, teclados y lectores móviles para gestión segura de entradas y salidas.',
      features: ['Biometría huella/rostro', 'Tarjetas RFID/NFC', 'App móvil Bluetooth', 'Registros en tiempo real'],
      cta: 'Ver detalles',
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Energía Solar Fotovoltaica',
      description: 'Diseño e instalación de sistemas solares on-grid y off-grid para reducir costos energéticos y huella de carbono.',
      features: ['Estudio de factibilidad', 'Inversores híbridos', 'Baterías de litio', 'Monitoreo producción'],
      cta: 'Ver detalles',
    },
    {
      id: 4,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: 'Instalaciones Eléctricas',
      description: 'Proyectos eléctricos residenciales, comerciales e industriales. Certificaciones, tableros, puesta a tierra y eficiencia energética.',
      features: ['Certificación SEC', 'Tableros normalizados', 'Eficiencia energética', 'Mantenimiento preventivo'],
      cta: 'Ver detalles',
    },
    {
      id: 5,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ),
      title: 'Alarmas y Detección',
      description: 'Sistemas de alarma inalámbricos y cableados con sensores perimetrales, volumétricos, de humo, gas y fuga de agua.',
      features: ['Central monitoreada 24/7', 'Sensores inalámbricos', 'Notificaciones push', 'Botón de pánico'],
      cta: 'Ver detalles',
    },
    {
      id: 6,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: 'Automatización y Domótica',
      description: 'Integración de iluminación, climatización, persianas y seguridad en una sola plataforma inteligente controlable por voz o app.',
      features: ['Control por voz', 'Escenas programadas', 'Sensor de presencia', 'Ahorro energético 30%'],
      cta: 'Ver detalles',
    },
  ];

  const [servicesRef] = useIntersectionObserver({ rootMargin: '0px 0px -100px 0px' });

  return (
    <section ref={servicesRef} id="servicios" className="sase-services section reveal" aria-labelledby="services-title">
      <div className="container">
        <header className="section-header reveal reveal-delay-1">
          <span className="section-header__tagline">Nuestros Servicios</span>
          <h2 id="services-title" className="section-header__title">Soluciones integrales para tu seguridad y energía</h2>
          <p className="section-header__description">
            Combinamos experiencia técnica con tecnología de punta para ofrecerte sistemas
            confiables, eficientes y adaptados a tus necesidades específicas.
          </p>
        </header>

        <div className="sase-services__grid reveal reveal-delay-2">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="sase-services__card card reveal reveal-delay-3 hover-lift"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="sase-services__icon-wrapper">
                <div className="sase-services__icon">{service.icon}</div>
              </div>
              <div className="sase-services__content">
                <h3 className="sase-services__title">{service.title}</h3>
                <p className="sase-services__description">{service.description}</p>
                <ul className="sase-services__features" aria-label={`Características de ${service.title}`}>
                  {service.features.map((feature, i) => (
                    <li key={i} className="sase-services__feature">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#cotizacion" className="sase-services__link">
                  {service.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="sase-services__cta reveal reveal-delay-4">
          <p>¿No encontraste lo que buscas? <a href="#cotizacion">Cuéntanos tu proyecto</a> y diseñamos una solución a medida.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;