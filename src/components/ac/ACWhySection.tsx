import { motion } from 'framer-motion';

const reasons = [
  {
    icon: (
      <div className="ac-why-icon ac-why-icon-blue">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>
    ),
    title: 'Expert Selected',
    desc: 'Chosen by AC experts based on performance, reliability & reviews',
  },
  {
    icon: (
      <div className="ac-why-icon ac-why-icon-red">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
    ),
    title: 'Tested for Ahmedabad',
    desc: 'These ACs work efficiently even in extreme heat conditions',
  },
  {
    icon: (
      <div className="ac-why-icon ac-why-icon-green">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
    ),
    title: 'Best Value for Money',
    desc: 'Right balance of features, efficiency and after-sales support',
  },
];

export default function ACWhySection() {
  return (
    <section className="ac-why-section">
      <h2 className="ac-why-heading">Why These ACs?</h2>
      <div className="ac-why-grid">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            className="ac-why-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {r.icon}
            <h3 className="ac-why-card-title">{r.title}</h3>
            <p className="ac-why-card-desc">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
