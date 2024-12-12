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

import { dataApi } from "../features/data/data-api";
import { dialogSlice } from "../features/dialog";
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
  blacklist: [dialogSlice.name, dataApi.reducerPath],
};

const rootReducer = combineSlices(
  themeSlice,
  sizeSlice,
  languageSlice,
  dialogSlice,
  dataApi,
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .prepend(dataApi.middleware)
      .prepend(languageListenerMiddleware.middleware)
      .prepend(themeListenerMiddleware.middleware)
      .prepend(sizeListenerMiddleware.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
