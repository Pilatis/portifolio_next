import { ProjectMediaItem } from "@/data";

export type Project = {
    id: number;
    title: string;
    des: string;
    img: string;
  iconLists: string[];
  /** Stack extra na página de detalhes (cards continuam usando só `iconLists`). */
  iconListsDetail?: string[];
  link?: string;
    media?: ProjectMediaItem[];
    clientName?: string;
    clientLogo?: string;
  };