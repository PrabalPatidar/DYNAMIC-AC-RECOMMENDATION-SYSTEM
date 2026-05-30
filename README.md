# Ahmedabad AC Guide — Dynamic Recommendation System

A dynamic AC recommendation page for [ahmedabadacguide.com](https://ahmedabadacguide.com). Built with React, Vite, and Tailwind CSS.

## How It Works

1. User completes the AC Decision Wizard
2. Wizard redirects to `/recommended-ac/?ton=1.5&type=inverter`
3. Page dynamically shows products matching that tonnage
4. User clicks affiliate link → Revenue

## URLs

| URL | Shows |
|---|---|
| `/recommended-ac/?ton=1.0` | 1.0 Ton inverter ACs |
| `/recommended-ac/?ton=1.5` | 1.5 Ton inverter ACs |
| `/recommended-ac/?ton=2.0` | 2.0 Ton inverter ACs |

## Updating Products

Edit `src/data/products.ts` to update prices, affiliate links, and product details.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
