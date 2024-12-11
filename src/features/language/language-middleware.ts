import { createListenerMiddleware } from "@reduxjs/toolkit";

import i18n from "../../localization";
import { setLanguage } from "./language-slice";
import { LanguageType } from "./types";

export const languageListenerMiddleware = createListenerMiddleware();

languageListenerMiddleware.startListening({
  actionCreator: setLanguage,
  effect: async ({ payload }) => {
    changeLanguage(payload);
  },
});

export const changeLanguage = (language: LanguageType) => {
  i18n.changeLanguage(language);
};
