import React from 'react';
import { services } from '../data/constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #f9fafb, #e0f2fe)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            השירותים שלנו
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '48rem', margin: '0 auto' }}>
            פתרונות מתקדמים ומקצועיים לכל צרכי רפואת השיניים
          </p>
        </div>
        <div className="grid grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <service.icon size={32} color="white" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                {service.title}
              </h3>
              <p style={{ color: '#6b7280' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;