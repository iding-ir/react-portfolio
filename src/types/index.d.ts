export type DataType = {
  cover: CoverType;
  pages: PageType[];
  links: LinkType[];
  footer: string;
  logo: string;
};

export type CoverType = {
  title: string;
  caption: string;
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
