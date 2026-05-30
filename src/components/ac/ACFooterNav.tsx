export default function ACFooterNav() {
  return (
    <div className="ac-footer-nav">
      <a href="/" className="ac-footer-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Results
      </a>
      <a href="/" className="ac-footer-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 11 16 4 9" />
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        </svg>
        Retake the Quiz
      </a>
    </div>
  );
}
