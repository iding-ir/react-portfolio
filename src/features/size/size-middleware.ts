import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setDataAttribute } from "../../utils/set-data-attribute";
import { setSize } from "./size-slice";
import { SizeType } from "./types";

export const sizeListenerMiddleware = createListenerMiddleware();

sizeListenerMiddleware.startListening({
  actionCreator: setSize,
  effect: async ({ payload }) => {
    changeSize(payload);
  },
});

export const changeSize = (size: SizeType) => {
  setDataAttribute({
    attr: "data-size",
    value: size,
    element: document.getElementsByTagName("html")[0],
  });
};
