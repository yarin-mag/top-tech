import React, { useState } from 'react';
import { Award, Phone, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/constants';
import AccessibilityModal from './AccessibilityModal';

const Footer: React.FC = () => {
  const [showAccessibility, setShowAccessibility] = useState(false);

  return (
    <footer style={{ background: '#111827', color: 'white', padding: '3rem 0' }}>
      <div className="container">
        <div className="grid grid-cols-3">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Award size={24} color="white" />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{companyInfo.name}</span>
            </div>
            <p style={{ color: '#9ca3af' }}>
              {companyInfo.description}
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>שירותים</h3>
            <ul style={{ listStyle: 'none', color: '#9ca3af' }}>
              <li style={{ marginBottom: '0.5rem' }}>שיניים תותבות חדשות</li>
              <li style={{ marginBottom: '0.5rem' }}>תיקון שיניים תותבות</li>
              <li style={{ marginBottom: '0.5rem' }}>ריפוד תותבות</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>צור קשר</h3>
            <ul style={{ listStyle: 'none', color: '#9ca3af' }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Phone size={16} style={{ marginLeft: '0.5rem' }} />
                054-493-3286
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <MapPin size={16} style={{ marginLeft: '0.5rem' }} />
                רחובות, בית הפועלים 6
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Clock size={16} style={{ marginLeft: '0.5rem' }} />
                א'-ה' 8:00-18:00
              </li>
            </ul>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #374151',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#9ca3af'
        }}>
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. כל הזכויות שמורות.</p>
          <button
            onClick={() => setShowAccessibility(true)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#9ca3af', marginTop: '0.5rem',
              fontSize: '0.875rem', textDecoration: 'underline',
              padding: 0
            }}
          >
            הצהרת נגישות
          </button>
        </div>
        {showAccessibility && <AccessibilityModal onClose={() => setShowAccessibility(false)} />}
      </div>
    </footer>
  );
};

export default Footer;