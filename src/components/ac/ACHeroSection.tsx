import { motion } from 'framer-motion';

interface ACHeroSectionProps {
  tonnage: number;
  type: string;
}

export default function ACHeroSection({ tonnage, type }: ACHeroSectionProps) {
  const displayTon = tonnage % 1 === 0 ? `${tonnage.toFixed(1)}` : `${tonnage}`;
  const displayType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <section className="ac-hero-section">
      {/* Mobile recommendation banner */}
      <div className="ac-recommendation-banner md:hidden">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span>Your Recommendation: <strong className="text-blue-600">{displayTon} Ton {displayType} Split AC</strong></span>
      </div>

      {/* Back link - Desktop */}
      <div className="hidden md:block mb-4">
        <a href="/" className="ac-back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Results
        </a>
      </div>

      <motion.div
        className="text-center py-6 md:py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="ac-hero-heading">
          Best{' '}
          <span className="ac-hero-highlight">{displayTon} Ton</span>
          {' '}{displayType} Split ACs for Ahmedabad
        </h1>
        <p className="ac-hero-subtext">
          Top picks that offer the best cooling, efficiency & value for your needs.
        </p>
      </motion.div>
    </section>
  );
}
