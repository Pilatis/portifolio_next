import { ProjectMediaItem } from "@/data";

export type Certification = {
    id: number;
    image: string;
    /** Imagem por idioma (PT/EN); quando definidos, substituem `image` conforme o locale. */
    imagePt?: string;
    imageEn?: string;
    images?: string[];
    title: string;
    description: string;
    issuer: string;
    startedAt: string;
    issuedAt: string | null;
    category: string[];
    skills: string[];
    topics?: string[];
    practicalApplication?: string;
    impact?: string;
    hours?: string;
    featured?: boolean;
  };