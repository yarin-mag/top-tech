import React from 'react';
import { X, Navigation, MapPin } from 'lucide-react';
import { getNavigationOptions } from '../utils/navigation';

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
}

const NavigationModal: React.FC<NavigationModalProps> = ({ isOpen, onClose, address }) => {
  if (!isOpen) return null;

  const options = getNavigationOptions(address);

  const handleOptionClick = (url: string) => {
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      direction: 'rtl'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '400px',
        width: '90%',
        maxHeight: '80vh',
        overflow: 'auto',
        position: 'relative',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} color="#6b7280" />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem'
          }}>
            <Navigation size={28} color="white" />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
            בחר אפליקציית ניווט
          </h3>
          <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '0.875rem' }}>
            <MapPin size={16} style={{ display: 'inline', marginLeft: '0.25rem' }} />
            {address}
          </p>
        </div>

        {/* Navigation options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.url)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                background: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#374151'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.backgroundColor = '#eff6ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              פתח ב-{option.name}
            </button>
          ))}
        </div>

        {/* Info text */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#9ca3af',
          marginTop: '1.5rem',
          lineHeight: '1.4'
        }}>
          על מכשיר נייד אמיתי תקבל אוטומטית בחירה של כל אפליקציות הניווט המותקנות
        </p>
      </div>
    </div>
  );
};

export default NavigationModal;