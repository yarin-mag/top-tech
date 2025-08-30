import React, { useState } from 'react';
import { Phone, MessageCircle, Facebook, MapPin } from 'lucide-react';
import { contactInfo } from '../data/constants';
import { openSmartNavigation } from '../utils/navigation';
import NavigationModal from './NavigationModal';

const ContactSection: React.FC = () => {
  const [showNavigationModal, setShowNavigationModal] = useState(false);

  // Smart navigation function that detects device and provides app choice
  const handleNavigation = () => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isRealDevice = isMobile && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1');
    
    if (isRealDevice) {
      // On real mobile devices, use the smart navigation
      openSmartNavigation(contactInfo.address);
    } else {
      // On desktop/dev tools, show the modal
      setShowNavigationModal(true);
    }
  };

  const contactMethods = [
    { 
      icon: Phone, 
      title: 'טלפון', 
      subtitle: '054-493-3286', 
      action: () => window.open(`tel:${contactInfo.phone}`, '_self'), 
      bg: '#16a34a' 
    },
    { 
      icon: MessageCircle, 
      title: 'וואטסאפ', 
      subtitle: 'שלח הודעה', 
      action: () => window.open(contactInfo.whatsapp, '_blank'), 
      bg: '#16a34a' 
    },
    { 
      icon: Facebook, 
      title: 'פייסבוק', 
      subtitle: 'Messenger', 
      action: () => window.open(contactInfo.facebook, '_blank'), 
      bg: '#2563eb' 
    },
    { 
      icon: MapPin, 
      title: 'מיקום', 
      subtitle: contactInfo.address, 
      action: handleNavigation, 
      bg: '#7c3aed' 
    }
  ];

  return (
    <>
      <section id="contact" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #2563eb, #1e40af)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1rem' }}>
             אתם גם רוצים שנעזור לכם לחייך?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#dbeafe' }}>צרו קשר בכל דרך שנוחה לכם</p>
          </div>
          <div className="grid grid-cols-4">
            {contactMethods.map((contact, index) => (
              <div 
                key={index} 
                className="card"
                style={{ 
                  padding: '1.5rem', 
                  textAlign: 'center', 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer'
                }}
                onClick={contact.action}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: contact.bg,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <contact.icon size={24} color="white" />
                </div>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{contact.title}</h3>
                <p style={{ color: '#dbeafe' }}>{contact.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <NavigationModal 
        isOpen={showNavigationModal}
        onClose={() => setShowNavigationModal(false)}
        address={contactInfo.address}
      />
    </>
  );
};

export default ContactSection;