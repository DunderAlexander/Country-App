import { AppDispatch, RootState } from "./redux/store";
import { fetchCountries, setSearchResult } from "./redux/slices/countriesSlice";
import { Route, Routes } from "react-router-dom";
import CountryCard from "./components/CountryCard";
import CountryPage from "./pages/CountryPage";
import { Header } from "./components/Header";
import Inputs from "./components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

type countriesListType = Array<{
  name: string;
  capital: string | undefined;
  region: string;
  population: number;
  flag: string;
  independent: boolean;
  alpha3Code: string;
}>;

const App = () => {
  const { dark, searchResult, query, filterRegion, countriesList } =
    useSelector((state: RootState) => state.countries);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    const filteredCountriesList = countriesList.filter((country) => {
      let matchesQuery = country.name
        .toLowerCase()
        .startsWith(query.toLowerCase());
      let matchesRegion =
        filterRegion === "Filter by Region" || country.region === filterRegion;
      return matchesQuery && matchesRegion;
    });

    dispatch(setSearchResult(filteredCountriesList));
  }, [query, filterRegion]);

  return (
    <div className={`min-h-screen ${dark && "dark"}`}>
      <div className="bg-VeryLightGray dark:bg-VeryDarkBlue_DM min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Inputs />
                <div className="mt-0 p-14 grid grid-flow-row gap-12 md:grid-cols-2 lg:grid-cols-4 drop-shadow-lg">
                  {searchResult.length === 0 &&
                  filterRegion === "Filter by Region"
                    ? countriesList.map((country) => (
                        <CountryCard
                          key={country.name}
                          name={country.name}
                          capital={country.capital}
                          region={country.region}
                          population={country.population}
                          flag={country.flag}
                        />
                      ))
                    : searchResult.map((country) => (
                        <CountryCard
                          key={country.name}
                          name={country.name}
                          capital={country.capital}
                          region={country.region}
                          population={country.population}
                          flag={country.flag}
                        />
                      ))}
                </div>
              </>
            }
          />
          <Route path="/countries/:country" element={<CountryPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
