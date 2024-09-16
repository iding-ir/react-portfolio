import { createListenerMiddleware } from "@reduxjs/toolkit";

import i18n from "../../localization";
import { setLanguage } from "./language-slice";

export const languageListenerMiddleware = createListenerMiddleware();

languageListenerMiddleware.startListening({
  actionCreator: setLanguage,
  effect: async ({ payload }) => {
    i18n.changeLanguage(payload);
  },
});
