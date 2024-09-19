import { About, Home, NoMatch } from "../pages";
import { Contact } from "../pages/Contact";
import { Resume } from "../pages/Resume";
import { Route } from "./types";
import { URLS } from "./urls";

export const routes: Route[] = [
  {
    title: "pages.home.title",
    path: URLS.HOME,
    exact: true,
    component: <Home />,
  },
  {
    title: "pages.about.title",
    path: URLS.ABOUT,
    exact: false,
    component: <About />,
    inMenu: true,
  },
  {
    title: "pages.resume.title",
    path: URLS.RESUME,
    exact: false,
    component: <Resume />,
    inMenu: true,
  },
  {
    title: "pages.contact.title",
    path: URLS.CONTACT,
    exact: false,
    component: <Contact />,
    inMenu: true,
  },
  {
    title: "pages.noMatch.title",
    path: URLS.NO_MATCH,
    exact: false,
    component: <NoMatch />,
  },
];
