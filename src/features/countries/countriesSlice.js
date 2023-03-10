import { createSlice } from "@reduxjs/toolkit";
import countryService from "../../services/countries";

export const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: true,
  },

  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },

    isLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const initialiseCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(getCountries(countries));
    dispatch(isLoading(false));
    //Here comes set timeout
  };
};

export const { getCountries, isLoading, search } = countrySlice.actions;

export default countrySlice.reducer;
