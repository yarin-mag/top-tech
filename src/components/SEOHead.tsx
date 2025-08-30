import React from 'react';
import { companyInfo, seoContent } from '../data/constants';

const SEOHead: React.FC = () => {
  React.useEffect(() => {
    // Update document title
    document.title = seoContent.title;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      let meta = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', seoContent.description);
    updateMetaTag('keywords', seoContent.keywords);
    updateMetaTag('author', seoContent.author);
    updateMetaTag('robots', seoContent.robots);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('charset', 'UTF-8');

    // Open Graph meta tags for social media
    updateMetaTag('og:title', seoContent.title, true);
    updateMetaTag('og:description', seoContent.description, true);
    updateMetaTag('og:type', 'business.business', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', companyInfo.name, true);
    updateMetaTag('og:locale', 'he_IL', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoContent.title);
    updateMetaTag('twitter:description', seoContent.description);

    // Business-specific meta tags
    updateMetaTag('geo.region', 'IL-M');
    updateMetaTag('geo.placename', 'רחובות');
    updateMetaTag('geo.position', '31.89738;34.81021');
    updateMetaTag('ICBM', '31.89738, 34.81021');

    // Language and direction
    document.documentElement.lang = 'he';
    document.documentElement.dir = 'rtl';

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seoContent.canonical;

    // JSON-LD Structured Data for Google
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "DentalClinic",
      "name": companyInfo.name,
      "alternateName": companyInfo.englishName,
      "description": companyInfo.description,
      "url": window.location.origin,
      "telephone": "+972-54-493-3286",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "בית הפועלים 6",
        "addressLocality": "רחובות",
        "addressCountry": "IL",
        "postalCode": "7670106"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.89738,
        "longitude": 34.81021
      },
      "openingHours": "Mo-Th 08:00-18:00",
      "priceRange": "$$",
      "areaServed": {
        "@type": "City",
        "name": "רחובות"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 31.89738,
          "longitude": 34.81021
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "שירותי מעבדת שיניים",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "שתלי שיניים",
              "description": "שתלי טיטניום איכותיים עם טכנולוגיה מתקדמת"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "כתרים וגשרים",
              "description": "כתרי חרסינה ומתכת במדידה אישית"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "תותבות שיניים",
              "description": "פתרונות תותבות חלקיות ומלאות"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/elimagdaci",
        "https://wa.me/972544933286"
      ]
    };

    // Add or update JSON-LD script
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

  }, []);

  return null; // This component doesn't render anything visible
};

export default SEOHead;