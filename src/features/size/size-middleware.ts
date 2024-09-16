import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setSize } from "./size-slice";

export const sizeListenerMiddleware = createListenerMiddleware();

sizeListenerMiddleware.startListening({
  actionCreator: setSize,
  effect: async ({ payload }) => {
    document.getElementsByTagName("html")[0].setAttribute("data-size", payload);
  },
});
