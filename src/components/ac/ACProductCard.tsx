import { motion } from 'framer-motion';
import { ACProduct, BADGE_COLORS, formatPrice, getDiscountPercent } from '../../data/products';
import { useState } from 'react';

interface ACProductCardProps {
  product: ACProduct;
  index: number;
  isCompared: boolean;
  onToggleCompare: (id: string) => void;
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;

  return (
    <div className="ac-star-rating">
      <div className="ac-stars">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < fullStars ? '#f59e0b' : i === fullStars && hasHalf ? 'url(#half)' : '#e5e7eb'}
            stroke="none"
          >
            {i === fullStars && hasHalf && (
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#e5e7eb" />
                </linearGradient>
              </defs>
            )}
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span className="ac-rating-value">{rating}</span>
      <span className="ac-review-count">({count.toLocaleString('en-IN')} reviews)</span>
    </div>
  );
}

function StarBadge({ stars }: { stars: number }) {
  return (
    <div className="ac-star-badge">
      <span>{stars} Star Rating</span>
    </div>
  );
}

export default function ACProductCard({ product, index, isCompared, onToggleCompare }: ACProductCardProps) {
  const discount = getDiscountPercent(product.price, product.mrp);
  const badgeStyle = product.badge ? BADGE_COLORS[product.badge] : null;
  const [imgError, setImgError] = useState(false);

  // Fallback SVG for missing product images
  const FallbackImage = () => (
    <div className="ac-card-img-fallback">
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="10" width="70" height="35" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="15" y="15" width="50" height="5" rx="2" fill="#cbd5e1"/>
        <rect x="15" y="23" width="50" height="15" rx="2" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
        <circle cx="40" cy="50" r="3" fill="#94a3b8"/>
        <text x="40" y="33" textAnchor="middle" fontSize="8" fill="#64748b">{product.brand}</text>
      </svg>
    </div>
  );

  return (
    <motion.div
      className={`ac-product-card ${badgeStyle ? 'has-badge' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Badge ribbon */}
      {product.badge && badgeStyle && (
        <div className={`ac-badge ${badgeStyle.bg} ${badgeStyle.text}`}>
          {product.badge}
        </div>
      )}

      <div className="ac-card-layout">
        {/* LEFT — Image */}
        <div className="ac-card-left">
          {imgError ? (
            <FallbackImage />
          ) : (
            <img
              src={product.image}
              alt={product.product_name}
              className="ac-card-img"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          <div className="ac-card-brand">{product.brand}</div>
        </div>

        {/* CENTER — Details */}
        <div className="ac-card-center">
          <h3 className="ac-card-title">{product.product_name}</h3>
          <p className="ac-card-model">{product.model_number}</p>
          <StarRating rating={product.rating} count={product.review_count} />

          <ul className="ac-feature-list">
            {product.features.map((f, i) => (
              <li key={i} className="ac-feature-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <button className="ac-specs-link">
            View Full Specifications
          </button>
        </div>

        {/* RIGHT — Price & CTA */}
        <div className="ac-card-right">
          <StarBadge stars={product.star_rating} />

          <div className="ac-price-block">
            <div className="ac-price">{formatPrice(product.price)}</div>
            <div className="ac-mrp">
              MRP: <span className="line-through">{formatPrice(product.mrp)}</span>
              <span className="ac-discount">({discount}% Off)</span>
            </div>
            {product.annual_savings && (
              <div className="ac-savings">
                Est. Annual Savings: {formatPrice(product.annual_savings)}
              </div>
            )}
          </div>

          <a
            href={product.affiliate_link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ac-cta-primary"
            id={`buy-${product.id}`}
          >
            View on Amazon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          <button
            className={`ac-compare-toggle ${isCompared ? 'active' : ''}`}
            onClick={() => onToggleCompare(product.id)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            Compare
          </button>

          <div className="ac-warranty-info">
            <div className="ac-warranty-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {product.warranty_product}
            </div>
            <div className="ac-warranty-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {product.warranty_compressor}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
