export interface IconsListTypes {
  id: number;
  icons: Array<string>;
  names: Array<string>;
}
export interface ProjectsItemsTypes {
  id: number;
  title: string;
  description: string;
  image: string;
  iconsList: Array<IconsListTypes>;
  link: string;
}
