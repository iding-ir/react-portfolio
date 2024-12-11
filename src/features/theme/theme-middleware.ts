import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setDataAttribute } from "../../utils/set-data-attribute";
import { setTheme } from "./theme-slice";
import { ThemeType } from "./types";

export const themeListenerMiddleware = createListenerMiddleware();

themeListenerMiddleware.startListening({
  actionCreator: setTheme,
  effect: async ({ payload }) => {
    changeTheme(payload);
  },
});

export const changeTheme = (theme: ThemeType) => {
  setDataAttribute({
    attr: "data-theme",
    value: theme,
    element: document.getElementsByTagName("html")[0],
  });
};
