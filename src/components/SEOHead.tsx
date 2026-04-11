import React from 'react';
import { seoContent } from '../data/constants';

// All static SEO (meta tags, JSON-LD, canonical, OG, geo) lives in public/index.html
// so it is guaranteed present in the raw HTML before any JS executes.
// This component only updates the document title and the dynamic og:url on mount.
const SEOHead: React.FC = () => {
  React.useEffect(() => {
    document.title = seoContent.title;

    // Keep og:url pointing at the canonical origin, not a hash fragment
    let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
    if (ogUrl) {
      ogUrl.setAttribute('content', seoContent.canonical);
    }
  }, []);

  return null;
};

export default SEOHead;
