import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setTheme } from "./theme-slice";

export const themeListenerMiddleware = createListenerMiddleware();

themeListenerMiddleware.startListening({
  actionCreator: setTheme,
  effect: async ({ payload }) => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", payload);
  },
});
