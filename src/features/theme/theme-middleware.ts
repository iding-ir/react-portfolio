import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setTheme } from "./theme-slice";
import { setDataAttribute } from "../../utils/set-data-attribute";
import { Theme } from "./theme";

export const themeListenerMiddleware = createListenerMiddleware();

themeListenerMiddleware.startListening({
  actionCreator: setTheme,
  effect: async ({ payload }) => {
    changeTheme(payload);
  },
});

export const changeTheme = (theme: Theme) => {
  setDataAttribute("data-theme", theme);
};
