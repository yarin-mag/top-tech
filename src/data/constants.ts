import { Award, Shield, Users } from 'lucide-react';

export const services = [
    {
        title: "שתלים מתקדמים",
        description: "שתלי טיטניום איכותיים עם טכנולוגיה מתקדמת",
        icon: Award
    },
    {
        title: "כתרים וגשרים",
        description: "כתרי חרסינה ומתכת במדידה אישית",
        icon: Shield
    },
    {
        title: "שיניים תותבות",
        description: "פתרונות תותבות חלקיות ומלאות",
        icon: Users
    }
];

export const testimonials = [
    {
        name: "פסיה שמעוני",
        text: "היום אני מחייכת בגאווה!",
        rating: 5
    },
    {
        name: "עמי טל",
        text: "שירות ומקצוענות מעולים!",
        rating: 5
    },
    {
        name: "אילה בר",
        text: "תודה שעזרת לי לחייך!",
        rating: 5
    }
];

export const stats = [
    { number: "20+", label: "שנות ניסיון" },
    { number: "500+", label: "רופאים שותפים" },
    { number: "10,000+", label: "מטופלים מרוצים" },
    { number: "24", label: "שעות אספקה" }
];

export const contactInfo = {
    phone: "+972544933286",
    whatsapp: "https://wa.me/972544933286",
    facebook: "https://m.me/elimagdaci",
    location: "geo:31.8969,34.8186?q=בית הפועלים 6, רחובות",
    locationFallback: "https://www.google.com/maps/dir/?api=1&destination=בית%20הפועלים%206,%20רחובות",
    waze: "https://waze.com/ul?ll=31.8969,34.8186&navigate=yes&q=בית%20הפועלים%206%20רחובות",
    address: "בית הפועלים 6, רחובות",
    coordinates: {
        lat: 31.8969,
        lng: 34.8186
    }
};

// Company information for SEO
export const companyInfo = {
    name: "מעבדת שיניים טופ-טק",
    englishName: "Top-Tech Dental Lab",
    city: "רחובות",
    fullAddress: "בית הפועלים 6, רחובות",
    description: "מעבדת שיניים מובילה ברחובות המתמחה בשתלים, כתרים, גשרים ותותבות שיניים. שירות מקצועי ואיכותי למרפאות שיניים.",
    keywords: [
        "טופ-טק", "טופ טק", "מעבדת שיניים רחובות", "מעבדת שיניים",
        "תותבות שיניים רחובות", "תותבות רחובות", "שיניים רחובות",
        "בית הפועלים 6", "מעבדת שיניים טופ טק רחובות", "שתלים רחובות",
        "כתרים רחובות", "מעבדת שיניים טופ-טק",
        "שיניים טופ טק", "תותבות", "תותבות שיניים ברחובות"
    ]
};

// SEO content for better search visibility
export const seoContent = {
    title: "מעבדת שיניים טופ-טק רחובות | שתלים, כתרים ותותבות שיניים",
    description: "מעבדת שיניים טופ-טק ברחובות - מובילים בתחום שתלי שיניים, כתרים, גשרים ותותבות. בית הפועלים 6, רחובות. שירות מקצועי ואמין למרפאות שיניים.",
    keywords: "מעבדת שיניים רחובות, טופ-טק, תותבות שיניים רחובות, שתלים רחובות, כתרים רחובות, בית הפועלים 6",
    author: "מעבדת שיניים טופ-טק",
    robots: "index, follow",
    canonical: "https://top-tech-dental.co.il"
};