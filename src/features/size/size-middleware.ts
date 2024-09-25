import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setSize } from "./size-slice";
import { setDataAttribute } from "../../utils/set-data-attribute";
import { Size } from "./size";

export const sizeListenerMiddleware = createListenerMiddleware();

sizeListenerMiddleware.startListening({
  actionCreator: setSize,
  effect: async ({ payload }) => {
    changeSize(payload);
  },
});

export const changeSize = (size: Size) => {
  setDataAttribute("data-size", size);
};
