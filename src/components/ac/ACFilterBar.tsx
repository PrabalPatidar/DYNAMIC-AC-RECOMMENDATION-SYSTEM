import { useState, useRef, useEffect } from 'react';

export type SortOption = 'recommended' | 'price-low' | 'price-high' | 'rating';
export type PriceRange = 'all' | 'under-30k' | '30k-40k' | '40k-50k' | '50k-plus';

interface ACFilterBarProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  priceRange: PriceRange;
  onPriceRangeChange: (range: PriceRange) => void;
  brand: string;
  onBrandChange: (brand: string) => void;
  availableBrands: string[];
  compareCount: number;
  tonnage: number;
  onTonnageChange: (tonnage: number) => void;
  availableTonnages: number[];
}

function Dropdown({
  label,
  value,
  displayValue,
  options,
  onChange,
}: {
  label: string;
  value: string;
  displayValue: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="ac-filter-dropdown" ref={ref}>
      <label className="ac-filter-label">{label}</label>
      <button className="ac-filter-btn" onClick={() => setOpen(!open)}>
        <span>{displayValue}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="ac-filter-menu">
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`ac-filter-option ${value === opt.value ? 'active' : ''}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
            >
              {opt.label}
              {value === opt.value && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ACFilterBar({
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  brand,
  onBrandChange,
  availableBrands,
  compareCount,
  tonnage,
  onTonnageChange,
  availableTonnages,
}: ACFilterBarProps) {
  const sortOptions = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-30k', label: 'Under ₹30,000' },
    { value: '30k-40k', label: '₹30,000 – ₹40,000' },
    { value: '40k-50k', label: '₹40,000 – ₹50,000' },
    { value: '50k-plus', label: '₹50,000+' },
  ];

  const brandOptions = [
    { value: 'all', label: 'All Brands' },
    ...availableBrands.map((b) => ({ value: b, label: b })),
  ];

  const tonnageOptions = availableTonnages.map((t) => ({
    value: t.toString(),
    label: `${t % 1 === 0 ? t.toFixed(1) : t} Ton`,
  }));

  const sortDisplay = sortOptions.find((o) => o.value === sortBy)?.label || 'Recommended';
  const priceDisplay = priceOptions.find((o) => o.value === priceRange)?.label || 'All Prices';
  const brandDisplay = brand === 'all' ? 'All Brands' : brand;

  return (
    <div className="ac-filter-bar">
      <div className="ac-filter-group">
        <Dropdown label="Sort By" value={sortBy} displayValue={sortDisplay} options={sortOptions} onChange={(v) => onSortChange(v as SortOption)} />
        
        <Dropdown 
          label="Capacity" 
          value={tonnage.toString()} 
          displayValue={`${tonnage % 1 === 0 ? tonnage.toFixed(1) : tonnage} Ton`} 
          options={tonnageOptions} 
          onChange={(v) => onTonnageChange(parseFloat(v))} 
        />

        <Dropdown label="Price Range" value={priceRange} displayValue={priceDisplay} options={priceOptions} onChange={(v) => onPriceRangeChange(v as PriceRange)} />
        <Dropdown label="Brands" value={brand} displayValue={brandDisplay} options={brandOptions} onChange={onBrandChange} />
      </div>

      <button className="ac-compare-btn" disabled={compareCount === 0}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
        Compare ({compareCount})
      </button>
    </div>
  );
}
