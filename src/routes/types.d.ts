export type Routes = {
  title: string;
  path: string;
  component: JSX.Element;
  exact?: boolean;
  routes?: Route[];
};
