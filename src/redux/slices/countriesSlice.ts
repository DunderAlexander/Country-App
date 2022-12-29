import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  isLoading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await fetch(
      `https://restcountries.com/v2/all?fields=name,capital,region,population,flag,alpha3Code`
    );
    return response.json();
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      (state.isLoading = false), (state.countriesList = action.payload);
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.isLoading = true; //false
      // state.error = action.error;
    });
  },
});
export const { setDark, setSearchResult, setQuery, setFilterRegion } =
  countriesSlice.actions;

export default countriesSlice.reducer;
