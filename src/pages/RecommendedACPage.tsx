import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductsByTonnage, getAvailableBrands, ACProduct } from '../data/products';
import ACHeroSection from '../components/ac/ACHeroSection';
import ACTrustBar from '../components/ac/ACTrustBar';
import ACFilterBar, { SortOption, PriceRange } from '../components/ac/ACFilterBar';
import ACProductCard from '../components/ac/ACProductCard';
import ACEmptyState from '../components/ac/ACEmptyState';
import ACWhySection from '../components/ac/ACWhySection';
import ACExpertCTA from '../components/ac/ACExpertCTA';
import ACFooterNav from '../components/ac/ACFooterNav';
import ACPriceDisclaimer from '../components/ac/ACPriceDisclaimer';

export default function RecommendedACPage() {
  const [searchParams] = useSearchParams();
  const tonParam = searchParams.get('ton');
  const typeParam = searchParams.get('type') || 'inverter';

  const tonnage = tonParam ? parseFloat(tonParam) : 1.5; // default 1.5 if missing

  // State
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [priceRange, setPriceRange] = useState<PriceRange>('all');
  const [brand, setBrand] = useState<string>('all');
  const [compareIds, setCompareIds] = useState<Set<string>>(new Set());

  // Get base products for this tonnage
  const baseProducts = useMemo(() => getProductsByTonnage(tonnage), [tonnage]);
  const availableBrands = useMemo(() => getAvailableBrands(tonnage), [tonnage]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    let result = [...baseProducts];

    // Brand filter
    if (brand !== 'all') {
      result = result.filter((p) => p.brand === brand);
    }

    // Price filter
    if (priceRange !== 'all') {
      result = result.filter((p) => {
        switch (priceRange) {
          case 'under-30k': return p.price < 30000;
          case '30k-40k': return p.price >= 30000 && p.price <= 40000;
          case '40k-50k': return p.price > 40000 && p.price <= 50000;
          case '50k-plus': return p.price > 50000;
          default: return true;
        }
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // recommended — already sorted by recommended_order
        break;
    }

    return result;
  }, [baseProducts, brand, priceRange, sortBy]);

  // Toggle compare
  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Dynamic SEO
  useEffect(() => {
    const displayTon = tonnage % 1 === 0 ? `${tonnage.toFixed(1)}` : `${tonnage}`;
    document.title = `Best ${displayTon} Ton Inverter Split ACs Ahmedabad | ahmedabadacguide.com`;

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      `Top ${displayTon} Ton inverter split ACs recommended for Ahmedabad homes. Expert-picked for extreme heat, energy efficiency & value. Compare prices & buy online.`
    );

    // Robots — noindex for filter URLs
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');

    return () => {
      document.title = 'Ahmedabad AC Guide';
    };
  }, [tonnage]);

  // Reset filters when tonnage changes
  useEffect(() => {
    setSortBy('recommended');
    setPriceRange('all');
    setBrand('all');
    setCompareIds(new Set());
  }, [tonnage]);

  return (
    <div className="ac-page">
      <div className="ac-page-container">
        <ACHeroSection tonnage={tonnage} type={typeParam} />
        <ACTrustBar />
        <ACFilterBar
          sortBy={sortBy}
          onSortChange={setSortBy}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          brand={brand}
          onBrandChange={setBrand}
          availableBrands={availableBrands}
          compareCount={compareIds.size}
          tonnage={tonnage}
        />

        {/* Product list */}
        <div className="ac-product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: ACProduct, index: number) => (
              <ACProductCard
                key={product.id}
                product={product}
                index={index}
                isCompared={compareIds.has(product.id)}
                onToggleCompare={toggleCompare}
              />
            ))
          ) : (
            <ACEmptyState />
          )}
        </div>

        <ACPriceDisclaimer />
        <ACWhySection />
        <ACExpertCTA />
        <ACFooterNav />
      </div>
    </div>
  );
}
