import React from 'react';

const SEOContent: React.FC = () => {
  return (
    <section style={{ 
      padding: '3rem 0', 
      background: '#f8fafc',
      borderTop: '1px solid #e2e8f0'
    }}>
      <div className="container">
        {/* Hidden SEO content for search engines */}
        <div style={{ 
          position: 'absolute', 
          left: '-9999px', 
          width: '1px', 
          height: '1px', 
          overflow: 'hidden' 
        }}>
          <h2>מעבדת שיניים טופ-טק רחובות - שירותים מקצועיים</h2>
          <p>
            מעבדת שיניים טופ-טק ברחובות מספקת שירותים מקצועיים למרפאות שיניים בכל הארץ. 
            אנו מתמחים בתותבות שיניים רחובות, שתלים רחובות, כתרים רחובות וגשרים. 
            המעבדה שלנו ממוקמת בבית הפועלים 6, רחובות ופועלת מעל 15 שנה בתחום.
          </p>
          <h3>שירותי מעבדת השיניים שלנו ברחובות:</h3>
          <ul>
            <li>תותבות שיניים רחובות - תותבות חלקיות ומלאות</li>
            <li>שתלים רחובות - שתלי טיטניום מתקדמים</li>
            <li>כתרים רחובות - כתרי חרסינה ומתכת</li>
            <li>גשרים רחובות - גשרי שיניים קבועים</li>
            <li>יישור שיניים - מכשירי יישור שקופים</li>
          </ul>
          <p>
            טופ-טק מעבדת שיניים ברחובות משרתת מרפאות שיניים באזור המרכז, 
            כולל רחובות, נס ציונה, יבנה, גדרה ואשדוד. אנו גאים בשירות המקצועי 
            והאמין שלנו ובזמני האספקה המהירים.
          </p>
        </div>

        {/* Visible content for users */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '1rem' 
          }}>
            למה לבחור במעבדת שיניים טופ-טק?
          </h2>
          <div className="grid grid-cols-2" style={{ gap: '2rem', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>
                מיקום נוח ברחובות
              </h3>
              <p style={{ color: '#6b7280' }}>
                ממוקמים בבית הפועלים 6, רחובות - נגישים לכל המרכז
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>
                ניסיון של 15+ שנים
              </h3>
              <p style={{ color: '#6b7280' }}>
                מעבדת שיניים מובילה עם ניסיון רב בתחום
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>
                טכנולוגיה מתקדמת
              </h3>
              <p style={{ color: '#6b7280' }}>
                ציוד חדיש ושיטות עבודה מתקדמות
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>
                שירות אמין ומהיר
              </h3>
              <p style={{ color: '#6b7280' }}>
                זמני אספקה קצרים ושירות מקצועי
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;