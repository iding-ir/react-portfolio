import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_SIZE } from "./size";
import { SizeType } from "./types";

export interface SizeState {
  current: SizeType;
}

const initialState: SizeState = {
  current: DEFAULT_SIZE,
};

export const sizeSlice = createAppSlice({
  name: "size",
  initialState,
  reducers: (create) => ({
    setSize: create.reducer((state, { payload }: PayloadAction<SizeType>) => {
      state.current = payload;
    }),
  }),
  selectors: {
    selectSize: ({ current }) => current,
  },
});

export const { setSize } = sizeSlice.actions;

export const { selectSize } = sizeSlice.selectors;
