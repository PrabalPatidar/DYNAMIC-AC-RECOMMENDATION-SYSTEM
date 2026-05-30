export default function ACExpertCTA() {
  return (
    <section className="ac-expert-cta">
      <div className="ac-expert-cta-inner">
        <div className="ac-expert-cta-content">
          <div className="ac-expert-cta-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="ac-expert-cta-title">Need Help Choosing the Right AC?</h3>
            <p className="ac-expert-cta-text">Our experts can help you pick the perfect AC for your home.</p>
          </div>
        </div>
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20AC%20for%20my%20room%20in%20Ahmedabad."
          target="_blank"
          rel="noopener noreferrer"
          className="ac-expert-cta-btn"
        >
          Talk to an AC Expert
        </a>
      </div>
    </section>
  );
}
