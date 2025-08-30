import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/constants';

const HeroSection: React.FC = () => {
  return (
    <section style={{
      background: 'linear-gradient(270deg, #2563eb, #1d4ed8, #1e40af)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.2)'
      }}></div>
      <div className="container" style={{ position: 'relative', padding: '6rem 1rem', textAlign: 'center' }}>
        <h1 className="rtl-text text-center" style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          החיוך שלך הוא <span style={{ color: '#fbbf24' }}>המומחיות שלנו</span>
        </h1>
        <p className="rtl-text text-center" style={{
          fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
          marginBottom: '2rem',
          color: '#dbeafe',
          maxWidth: '48rem',
          margin: '0 auto 2rem'
        }}>
          מעבדת שיניים טופ-טק ברחובות - מובילה באיכות בתחום תותבות שיניים, שתלים וכתרים. פתרונות מתקדמים לרפואת שיניים מקצועית
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <button 
            className="btn btn-primary btn-lg rtl-text"
            style={{ background: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => window.open(contactInfo.whatsapp, '_blank')}
          >
            <MessageCircle size={20} />
            שלח הודעה בוואטסאפ
          </button>
          <button 
            className="btn btn-outline btn-lg rtl-text"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
          >
            <Phone size={20} />
            התקשר עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;