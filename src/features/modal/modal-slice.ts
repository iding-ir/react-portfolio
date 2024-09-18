import { createAppSlice } from "../createAppSlice";

export interface ModalState {
  open: boolean;
}

const initialState: ModalState = {
  open: false,
};

export const modalSlice = createAppSlice({
  name: "modal",
  initialState,
  reducers: (create) => ({
    openModal: create.reducer((state) => {
      state.open = true;
    }),
    closeModal: create.reducer((state) => {
      state.open = false;
    }),
  }),
  selectors: {
    selectModal: ({ open }) => open,
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const { selectModal } = modalSlice.selectors;
