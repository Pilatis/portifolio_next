export type BrandProductStatus = "live" | "building";

export type BrandMediaItem = {
  src: string;
  type: "image" | "video";
};

export type BrandProduct = {
  id: string;
  /** Fallback title if translation missing */
  brandName: string;
  liveUrl: string;
  status: BrandProductStatus;
  platforms: string[];
  logoIcon: string;
  logoWordmark?: string;
  logoFull?: string;
  /** Optional cover / first mockup; when absent, UI shows placeholder */
  coverImg?: string;
  media?: BrandMediaItem[];
  iconLists: string[];
  iconListsDetail?: string[];
  /** Glow / accent for the card (CSS color) */
  accent?: string;
};
