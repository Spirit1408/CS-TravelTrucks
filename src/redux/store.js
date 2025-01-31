import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucks/slice";
import { filtersReducer } from "./filters/slice";
import { favoritesReducer } from "./favorites/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "favorites",
	storage,
	whitelist: ["favorites"],
};

const persistedFavoriteReducer = persistReducer(
	persistConfig,
	favoritesReducer,
);

const store = configureStore({
	reducer: {
		trucks: trucksReducer,
		filters: filtersReducer,
		favorites: persistedFavoriteReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export default store;
