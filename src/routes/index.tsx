import ResumeIcon from "../assets/icon-document.svg";
import ContactIcon from "../assets/icon-headphones.svg";
import AboutIcon from "../assets/icon-info.svg";
import { About, Home, NoMatch } from "../pages";
import { Contact } from "../pages/Contact";
import { Resume } from "../pages/Resume";
import { Route } from "./types";
import { URLS } from "./urls";

export const routes: Route[] = [
  {
    title: "pages.home.title",
    path: URLS.HOME,
    component: <Home />,
  },
  {
    title: "pages.about.title",
    path: URLS.ABOUT,
    component: <About />,
    icon: <AboutIcon />,
    inMenu: true,
  },
  {
    title: "pages.resume.title",
    path: URLS.RESUME,
    component: <Resume />,
    icon: <ResumeIcon />,
    inMenu: true,
  },
  {
    title: "pages.contact.title",
    path: URLS.CONTACT,
    component: <Contact />,
    icon: <ContactIcon />,
    inMenu: true,
  },
  {
    title: "pages.noMatch.title",
    path: URLS.NO_MATCH,
    component: <NoMatch />,
  },
];
