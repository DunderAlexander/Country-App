import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CountryInfo {
  name: string;
  nativeName: string | undefined;
  population: number;
  region: string;
  subregion: string;
  capital: string | undefined;
  topLevelDomain: string[];
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  borders: string[];
  flags: {
    svg: string;
  };
}

const initialState = {
  countryInfo: [] as CountryInfo[],
  isLoading: true,
  error: null,
};

export const fetchCountryInfo = createAsyncThunk(
  "details/fetchCountryInfo",
  async (countryName: string | undefined) => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${countryName}?fullText=true`
    );
    return response.json();
  }
);

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountryInfo.fulfilled, (state, action) => {
      state.countryInfo = action.payload;
      state.isLoading = false;
    });
  },
});

export default detailsSlice.reducer;
