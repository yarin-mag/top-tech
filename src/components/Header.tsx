import React from 'react';
import { Award } from 'lucide-react';
import { companyInfo } from '../data/constants';

const Header: React.FC = () => {
  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid #e0f2fe'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <Award size={28} color="white" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>{companyInfo.name}</h1>
            <p style={{ fontSize: '0.875rem', color: '#2563eb', fontWeight: '600', margin: 0 }}>מובילים באיכות ובמקצועיות</p>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#services" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>שירותים</a>
          <a href="#testimonials" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>המלצות</a>
          <a href="#contact" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>צור קשר</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;