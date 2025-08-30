import React from 'react';
import { stats } from '../data/constants';

const StatsSection: React.FC = () => {
  return (
    <section style={{ padding: '4rem 0', background: 'white' }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>
                {stat.number}
              </div>
              <div className="rtl-text text-center" style={{ color: '#6b7280', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;