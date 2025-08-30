import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import SEOContent from '../components/SEOContent';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
      width: '100%',
      overflowX: 'hidden'
    }}>
      <SEOHead />
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <SEOContent />
      <Footer />
    </div>
  );
}