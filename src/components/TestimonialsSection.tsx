import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            מה אומרים עלינו
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>לקוחות ממליצים עלינו</p>
        </div>
        <div className="grid grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #eff6ff, white)' }}>
              <div style={{ display: 'flex', marginBottom: '1rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} color="#fbbf24" fill="#fbbf24" />
                ))}
              </div>
              <p style={{ color: '#374151', marginBottom: '1rem' }}>"{testimonial.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '0.75rem'
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>
                    {testimonial.name.charAt(3)}
                  </span>
                </div>
                <div>
                  <p style={{ fontWeight: '600', color: '#111827', margin: 0 }}>{testimonial.name}</p>
                  {/* <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>רופא שיניים</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;