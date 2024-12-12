import { createAppSlice } from "../createAppSlice";

export interface DialogState {
  open: boolean;
}

const initialState: DialogState = {
  open: false,
};

export const dialogSlice = createAppSlice({
  name: "dialog",
  initialState,
  reducers: (create) => ({
    openDialog: create.reducer((state) => {
      state.open = true;
    }),
    closeDialog: create.reducer((state) => {
      state.open = false;
    }),
  }),
  selectors: {
    selectDialog: ({ open }) => open,
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export const { selectDialog } = dialogSlice.selectors;
