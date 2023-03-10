import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countries/countriesSlice";
import favoriteSlice from "../features/countries/favoriteSlice";

export default configureStore({
  reducer: {
    countries: countriesSlice,
    favourites: favoriteSlice,
  },
});
