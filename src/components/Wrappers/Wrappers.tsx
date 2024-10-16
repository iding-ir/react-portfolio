import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "../../app/store";
import { StoreProvider } from "../../app/storeProvider";

export const Wrappers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>{children}</HelmetProvider>
      </PersistGate>
    </StoreProvider>
  );
};
