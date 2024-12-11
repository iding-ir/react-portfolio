export type DataType = {
  pages: PageType[];
  links: LinkType[];
  footer: string;
  logo: string;
};

export type PageType = {
  title: string;
  file: string;
  icon: string;
  slug: string;
};

export type LinkType = {
  title: string;
  icon: string;
  url: string;
  ariaLabel?: string;
};
