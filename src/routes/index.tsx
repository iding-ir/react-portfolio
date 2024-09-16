import { About, Home, NoMatch } from "../pages";
import { Routes } from "./types";
import { URLS } from "./urls";

export const routes: Routes[] = [
  {
    title: "pages.home",
    path: URLS.HOME,
    exact: true,
    component: <Home />,
  },
  {
    title: "pages.about",
    path: URLS.ABOUT,
    exact: false,
    component: <About />,
  },
  {
    title: "pages.noMatch",
    path: URLS.NO_MATCH,
    exact: false,
    component: <NoMatch />,
  },
];
