import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { languageSlice } from "../features/language";
import { languageListenerMiddleware } from "../features/language/language-middleware";
import { sizeSlice } from "../features/size";
import { sizeListenerMiddleware } from "../features/size/size-middleware";
import { themeSlice } from "../features/theme";
import { themeListenerMiddleware } from "../features/theme/theme-middleware";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [],
};

const rootReducer = combineSlices(themeSlice, sizeSlice, languageSlice);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .prepend(languageListenerMiddleware.middleware)
        .prepend(themeListenerMiddleware.middleware)
        .prepend(sizeListenerMiddleware.middleware),
  });
};

export const persistor = persistStore(makeStore());

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
