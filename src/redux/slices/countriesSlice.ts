import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

// const [countriesList, setCountriesList] = useState<countriesListType>([]);
// const [query, setQuery] = useState<string>("");
// const [searchResult, setSearchResult] = useState<countriesListType>([]);
// const [filterRegion, setFilterRegion] = useState<string>("Filter by Region");
// const [dark, setDark] = useState(false);

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
  searchResult: "",
  filterRegion: "Filter by Region",
  dark: false,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setDark: (state) => {
      state.dark = !state.dark;
    },
  },
});
