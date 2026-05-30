import { motion } from 'framer-motion';

export default function ACEmptyState() {
  return (
    <motion.div
      className="ac-empty-state"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="ac-empty-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </div>
      <h2 className="ac-empty-title">Recommended capacity generated successfully.</h2>
      <p className="ac-empty-text">
        We are preparing suitable recommendations for this capacity.<br />
        Our experts will update this section shortly.
      </p>
      <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20AC%20for%20my%20room%20in%20Ahmedabad." 
         target="_blank"
         rel="noopener noreferrer"
         className="ac-empty-cta"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Talk to an AC Expert
      </a>
    </motion.div>
  );
}
