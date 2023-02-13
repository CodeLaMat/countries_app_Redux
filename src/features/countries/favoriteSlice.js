import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },
  reducers: {
    getFavourites(state, action) {},
    addFavourites(state, action) {
      state.favourites = [...state.favourites, action.payload];
      localStorage.setItem("Favourites", JSON.stringify(state.favourites));
    },
    removeFavourites(state, action) {
      localStorage.removeItem("Favourites");
      state.favourites = [];
    },
  },
});

export const { getFavourites, addFavourites, removeFavourites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
