import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const AccessibilityModal: React.FC<Props> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    modalRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-title"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        dir="rtl"
        style={{
          background: 'white', borderRadius: '12px',
          maxWidth: '640px', width: '100%',
          maxHeight: '80vh', overflowY: 'auto',
          padding: '2rem', position: 'relative',
          outline: 'none'
        }}
      >
        <button
          onClick={onClose}
          aria-label="סגור"
          style={{
            position: 'absolute', top: '1rem', left: '1rem',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '0.25rem', borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        <h2 id="accessibility-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>
          הצהרת נגישות
        </h2>

        <section style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>כללי</h3>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            מעבדת שיניים טופ-טק פועלת לאפשר לכלל האוכלוסייה, לרבות אנשים עם מוגבלות, לגשת לתכני האתר ולהשתמש בו בצורה מיטבית.
            האתר מיישם את המלצות תקן נגישות WCAG 2.1 ברמה AA, באופן חלקי.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>מה בוצע לשיפור הנגישות</h3>
          <ul style={{ color: '#374151', lineHeight: '1.9', paddingRight: '1.25rem' }}>
            <li>שפת האתר מוגדרת כעברית (<code>lang="he"</code>) וכיוון הטקסט מימין לשמאל</li>
            <li>ניגודיות צבעים עומדת בדרישות המינימום</li>
            <li>כותרות מובנות בהיררכיה (H1, H2, H3)</li>
            <li>כל תמונות האתר כוללות טקסט חלופי מתאר</li>
            <li>ניתן לנווט באתר באמצעות מקלדת בלבד</li>
            <li>הגדרת תפקידים (ARIA roles) לרכיבים אינטראקטיביים</li>
            <li>האתר תואם לקורא מסך בסיסי</li>
          </ul>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>מגבלות ידועות</h3>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            ייתכן כי חלק מהרכיבים הדינמיים אינם נגישים לחלוטין עם כל קוראי המסך. אנו פועלים לשפר זאת באופן שוטף.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>ממונה נגישות</h3>
          <p style={{ color: '#374151', lineHeight: '1.7' }}>
            לפניות בנושא נגישות ניתן לפנות:
          </p>
          <ul style={{ color: '#374151', lineHeight: '1.9', paddingRight: '1.25rem' }}>
            <li>טלפון: <a href="tel:+972544933286" style={{ color: '#2563eb' }}>054-493-3286</a></li>
            <li>כתובת: בית הפועלים 6, רחובות</li>
          </ul>
        </section>

        <section>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>תאריך עדכון</h3>
          <p style={{ color: '#374151' }}>יוני 2026</p>
        </section>
      </div>
    </div>
  );
};

export default AccessibilityModal;
