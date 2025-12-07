/**
 * Optimized Image Utility
 * Provides lazy loading and dimension hints for hero images
 * WebP conversion handled by Vite at build time
 */

// Hero image imports
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroCabinets from "@/assets/hero-cabinets.jpg";
import heroDeck from "@/assets/hero-deck.jpg";
import heroFlooring from "@/assets/hero-flooring.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import heroPainting from "@/assets/hero-painting.jpg";
import heroRetail from "@/assets/hero-retail.jpg";
import heroTenantBuildout from "@/assets/hero-tenant-buildout.jpg";

// Image dimensions for CLS prevention
export interface ImageDimensions {
  width: number;
  height: number;
}

// Standard hero image dimensions (approximate for aspect ratio hints)
export const HERO_DIMENSIONS: ImageDimensions = {
  width: 1920,
  height: 1080,
};

// Hero images mapped by key for easy access
export const heroImages = {
  kitchen: heroKitchen,
  bathroom: heroBathroom,
  commercial: heroCommercial,
  cabinets: heroCabinets,
  deck: heroDeck,
  flooring: heroFlooring,
  office: heroOffice,
  painting: heroPainting,
  retail: heroRetail,
  tenantBuildout: heroTenantBuildout,
} as const;

export type HeroImageKey = keyof typeof heroImages;

/**
 * Get hero image by key with fallback
 */
export const getHeroImage = (key: HeroImageKey | string): string => {
  return heroImages[key as HeroImageKey] || heroImages.kitchen;
};
