export default function ACPriceDisclaimer() {
  return (
    <div className="ac-disclaimer">
      <div className="ac-disclaimer-inner">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p>
          Prices may vary. Check the latest offers on Amazon.<br className="hidden sm:inline" />
          {' '}We may earn a small commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
