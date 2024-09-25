import { createListenerMiddleware } from "@reduxjs/toolkit";

import i18n from "../../localization";
import { setLanguage } from "./language-slice";
import { Language } from "./language";

export const languageListenerMiddleware = createListenerMiddleware();

languageListenerMiddleware.startListening({
  actionCreator: setLanguage,
  effect: async ({ payload }) => {
    changeLanguage(payload);
  },
});

export const changeLanguage = (language: Language) => {
  i18n.changeLanguage(language);
};
