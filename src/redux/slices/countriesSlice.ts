import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type countriesListType = Array<{
  name: string;
  capital: string | undefined;
  region: string;
  population: number;
  flag: string;
  independent: boolean;
  alpha3Code: string;
}>;

const initialState = {
  countriesList: <countriesListType>[],
  query: "",
  searchResult: <countriesListType>[],
  filterRegion: "Filter by Region",
  dark: false,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<countriesListType>) => {
      state.searchResult = action.payload;
    },
    setFilterRegion: (state, action: PayloadAction<string>) => {
      state.filterRegion = action.payload;
    },
    setDark: (state) => {
      state.dark = !state.dark;
    },
  },
});
export const { setDark, setSearchResult, setQuery, setFilterRegion } =
  countriesSlice.actions;

export default countriesSlice.reducer;
