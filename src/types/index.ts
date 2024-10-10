export type Data = {
  routes: RouteType[];
  footer: string;
};

export type RouteType = {
  type: ROUTE_TYPE;
  path: string;
  title: string;
  content: string;
  icon?: string;
};

export type PageType = {
  title: string;
  content: string;
};

export enum ROUTE_TYPES {
  PAGE = "PAGE",
  LINK = "LINK",
}

export type ROUTE_TYPE = keyof typeof ROUTE_TYPES;
