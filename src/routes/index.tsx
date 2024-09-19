import { About, Home, NoMatch } from "../pages";
import { Contact } from "../pages/Contact";
import { Resume } from "../pages/Resume";
import { Route } from "./types";
import { URLS } from "./urls";
import AboutIcon from "../assets/icon-info.svg";
import ContactIcon from "../assets/icon-headphones.svg";
import ResumeIcon from "../assets/icon-document.svg";

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
    icon: <AboutIcon />,
    inMenu: true,
  },
  {
    title: "pages.resume.title",
    path: URLS.RESUME,
    exact: false,
    component: <Resume />,
    icon: <ResumeIcon />,
    inMenu: true,
  },
  {
    title: "pages.contact.title",
    path: URLS.CONTACT,
    exact: false,
    component: <Contact />,
    icon: <ContactIcon />,
    inMenu: true,
  },
  {
    title: "pages.noMatch.title",
    path: URLS.NO_MATCH,
    exact: false,
    component: <NoMatch />,
  },
];
