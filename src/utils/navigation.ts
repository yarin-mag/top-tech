// Navigation utility functions for cross-platform navigation app support

export interface NavigationOption {
  name: string;
  url: string;
  icon?: string;
}

export const getNavigationOptions = (address: string): NavigationOption[] => {
  const encodedAddress = encodeURIComponent(address);
  
  return [
    {
      name: 'Waze',
      url: `https://www.waze.com/he/live-map/directions/%D7%91%D7%99%D7%AA-%D7%94%D7%A4%D7%95%D7%A2%D7%9C%D7%99%D7%9D-6-%D7%A8%D7%97%D7%95%D7%91%D7%95%D7%AA?to=place.w.22806847.228134006.554426`,
    },
    {
      name: 'Google Maps',
      url: `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
    },
    {
      name: 'Apple Maps',
      url: `http://maps.apple.com/?daddr=${encodedAddress}`,
    },
    {
      name: 'Moovit',
      url: `https://moovitapp.com/tripplan/israel-1/poi/%D7%91%D7%99%D7%AA%20%D7%94%D7%A4%D7%95%D7%A2%D7%9C%D7%99%D7%9D%206/%D7%9E%D7%99%D7%A7%D7%95%D7%9E%D7%9A%20%D7%94%D7%A0%D7%95%D7%9B%D7%97%D7%99/he`,
    }
  ];
};

export const openSmartNavigation = (address: string) => {
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  const isRealDevice = isMobile && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1');
  
  // Coordinates for בית הפועלים 6, רחובות
  const lat = 31.8969;
  const lng = 34.8186;
  
  if (isRealDevice) {
    // Only try geo: protocol on real mobile devices, not dev tools or localhost
    if (isIOS) {
      // iOS: Try geo: protocol first, then fallback to Apple Maps
      const geoUrl = `geo:${lat},${lng}?q=${encodeURIComponent(address)}`;
      const appleUrl = `http://maps.apple.com/?daddr=${encodeURIComponent(address)}`;
      
      // Try geo: protocol with immediate fallback
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = geoUrl;
      document.body.appendChild(iframe);
      
      // Fallback to Apple Maps after short delay
      setTimeout(() => {
        document.body.removeChild(iframe);
        window.open(appleUrl, '_blank');
      }, 1000);
      
    } else if (isAndroid) {
      // Android: Try geo: protocol first, then fallback to Google Maps
      const geoUrl = `geo:${lat},${lng}?q=${encodeURIComponent(address)}`;
      const googleUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
      
      // Try geo: protocol with immediate fallback
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = geoUrl;
      document.body.appendChild(iframe);
      
      // Fallback to Google Maps after short delay
      setTimeout(() => {
        document.body.removeChild(iframe);
        window.open(googleUrl, '_blank');
      }, 1000);
    }
  } else {
    // Desktop, dev tools, or localhost: Show navigation options
    showNavigationOptions(address);
  }
};

// Show navigation options for desktop/dev environments
export const showNavigationOptions = (address: string) => {
  const options = getNavigationOptions(address);
  
  // Create a better selection interface
  const message = `בחר אפליקציית ניווט ל${address}:\n\n` +
    `• Waze - לחץ "אישור"\n` +
    `• Google Maps - לחץ "ביטול"\n\n` +
    `(על מכשיר נייד אמיתי תקבל בחירה של כל האפליקציות המותקנות)`;
  
  const choice = window.confirm(message);
  
  if (choice) {
    // Open Waze
    window.open(options[0].url, '_blank');
  } else {
    // Open Google Maps
    window.open(options[1].url, '_blank');
  }
};