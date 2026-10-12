import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const [submitStatus, setSubmitStatus] = useState('idle');

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: 'Oficina Principal',
      details: ['Av. Providencia 1234, Of. 501', 'Providencia, Santiago, Chile'],
      link: 'https://maps.google.com',
      linkText: 'Ver en mapa',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: 'Teléfonos',
      details: ['+56 2 2940 1234', '+56 9 8765 4321 (WhatsApp)'],
      link: 'tel:+56229401234',
      linkText: 'Llamar ahora',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: 'Email',
      details: ['contacto@sase.cl', 'cotizaciones@sase.cl'],
      link: 'mailto:contacto@sase.cl',
      linkText: 'Enviar email',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Horario de Atención',
      details: ['Lunes a Viernes: 08:30 - 18:30', 'Sábados: 09:00 - 13:00', 'Emergencias 24/7: +56 9 8765 4321'],
      link: null,
      linkText: null,
    },
  ];

  const [contactRef] = useIntersectionObserver({ rootMargin: '0px 0px -100px 0px' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Solicitud de cotización SASE: ${formData.nombre}`);
    const body = encodeURIComponent([
      `Nombre: ${formData.nombre}`,
      `Correo: ${formData.email}`,
      `Teléfono: ${formData.telefono}`,
      `Servicio: ${formData.servicio || 'No especificado'}`,
      '',
      'Detalles del proyecto:',
      formData.mensaje,
    ].join('\n'));

    window.location.href = `mailto:cotizaciones@sase.cl?subject=${subject}&body=${body}`;
    setSubmitStatus('email');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section ref={contactRef} id="contacto" className="sase-contact section reveal" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-header reveal reveal-delay-1">
          <span className="section-header__tagline">Contacto</span>
          <h2 id="contact-title" className="section-header__title">Hablemos de tu proyecto</h2>
          <p className="section-header__description">
            Completa el formulario y nuestro equipo técnico te contactará en menos de 24 horas
            para agendar una visita técnica sin compromiso.
          </p>
        </header>

        <div className="sase-contact__grid reveal reveal-delay-2">
          <div className="sase-contact__info reveal reveal-delay-3">
            <h3 className="sase-contact__info-title">Medios de contacto</h3>
            <p className="sase-contact__info-text">
              Estamos disponibles a través de múltiples canales para atender tus consultas
              de la forma más cómoda para ti.
            </p>

            <div className="sase-contact__methods">
              {contactMethods.map((method, index) => (
                <div key={method.title} className="sase-contact__method card hover-lift reveal reveal-delay-4" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="sase-contact__method-icon">{method.icon}</div>
                  <div className="sase-contact__method-content">
                    <h4 className="sase-contact__method-title">{method.title}</h4>
                    <ul className="sase-contact__method-details">
                      {method.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    {method.link && (
                      <a href={method.link} className="sase-contact__method-link" target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {method.linkText}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sase-contact__form-wrapper card reveal reveal-delay-5">
            <h3 className="sase-contact__form-title">Solicita tu cotización</h3>

            {submitStatus === 'email' && (
              <div className="sase-contact__success" role="status">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#69B52E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h4>Tu solicitud está lista para enviarse</h4>
                <p>Revisa el mensaje preparado en tu aplicación de correo y pulsa Enviar para completar la solicitud.</p>
                <button type="button" className="btn btn--secondary" onClick={() => setSubmitStatus('idle')}>
                  Editar solicitud
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="sase-contact__form" noValidate>
              <div className="sase-contact__row">
                <div className="sase-contact__field">
                  <label htmlFor="nombre" className="sase-contact__label">Nombre completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="sase-contact__input"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="Juan Pérez"
                    disabled={submitStatus === 'submitting'}
                  />
                </div>
                <div className="sase-contact__field">
                  <label htmlFor="email" className="sase-contact__label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="sase-contact__input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="juan@empresa.cl"
                    disabled={submitStatus === 'submitting'}
                  />
                </div>
              </div>

              <div className="sase-contact__row">
                <div className="sase-contact__field">
                  <label htmlFor="telefono" className="sase-contact__label">Teléfono *</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="sase-contact__input"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="+56 9 1234 5678"
                    disabled={submitStatus === 'submitting'}
                  />
                </div>
                <div className="sase-contact__field">
                  <label htmlFor="servicio" className="sase-contact__label">Servicio de interés</label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="sase-contact__select"
                    value={formData.servicio}
                    onChange={handleChange}
                    disabled={submitStatus === 'submitting'}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="cctv">Videovigilancia CCTV</option>
                    <option value="acceso">Control de Acceso</option>
                    <option value="solar">Energía Solar</option>
                    <option value="electrico">Instalaciones Eléctricas</option>
                    <option value="alarma">Alarmas y Detección</option>
                    <option value="domotica">Automatización y Domótica</option>
                    <option value="otro">Otro / Múltiples servicios</option>
                  </select>
                </div>
              </div>

              <div className="sase-contact__field">
                <label htmlFor="mensaje" className="sase-contact__label">Detalles del proyecto *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className="sase-contact__textarea"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  rows="5"
                  placeholder="Cuéntanos brevemente qué necesitas: tipo de inmueble, metros cuadrados, requerimientos específicos, plazo estimado..."
                  disabled={submitStatus === 'submitting'}
                ></textarea>
              </div>

              <div className="sase-contact__privacy">
                <label className="sase-contact__checkbox-label">
                  <input
                    type="checkbox"
                    name="privacidad"
                    className="sase-contact__checkbox"
                    required
                    aria-required="true"
                    disabled={submitStatus === 'submitting'}
                  />
                  <span className="sase-contact__checkbox-text">
                    Acepto la <a href="#politica-privacidad">Política de Privacidad</a> y autorizo el tratamiento de mis datos para fines comerciales.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--full sase-contact__submit"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? (
                  <>
                    <svg className="sase-contact__spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar Solicitud'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;