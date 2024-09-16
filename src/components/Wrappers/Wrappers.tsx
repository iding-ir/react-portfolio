import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const Wrappers = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
