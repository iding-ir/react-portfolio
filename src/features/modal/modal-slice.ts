import { createAppSlice } from "../createAppSlice";

export interface ModalState {
  current: boolean;
}

const initialState: ModalState = {
  current: false,
};

export const modalSlice = createAppSlice({
  name: "modal",
  initialState,
  reducers: (create) => ({
    openModal: create.reducer((state) => {
      state.current = true;
    }),
    closeModal: create.reducer((state) => {
      state.current = false;
    }),
  }),
  selectors: {
    selectModal: ({ current }) => current,
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const { selectModal } = modalSlice.selectors;
