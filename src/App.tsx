import CountryCard from "./components/CountryCard";
import { Header } from "./components/Header";
import Inputs from "./components/Inputs";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import { useEffect, useState } from "react";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult } from "./redux/slices/countriesSlice";

// TODO: export all of the fetching and state logic into separate hook

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
  const [countriesList, setCountriesList] = useState<countriesListType>([]);
  // const [query, setQuery] = useState<string>("");
  // const [searchResult, setSearchResult] = useState<countriesListType>([]);
  // const [filterRegion, setFilterRegion] = useState<string>("Filter by Region");

  const { dark, searchResult, query, filterRegion } = useSelector(
    (state: RootState) => state.countries
  );
  const dispatch = useDispatch();

  // Display all of the countries from the getCountries() immediately.
  useEffect((): void => {
    getCountries();
  }, []);

  // Search and filter functionality
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

  // A function to get all the countries to display on screen.
  const getCountries = (): void => {
    fetch(
      `https://restcountries.com/v2/all?fields=name,capital,region,population,flag,alpha3Code`
    )
      .then((resolve) => resolve.json())
      .then(setCountriesList);
  };

  // function toggleDarkMode() {
  //   setDark(!dark);
  // }

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
                <div className="lg:mt-0 mt-16 p-14 grid grid-flow-row gap-12 md:grid-cols-2 lg:grid-cols-4 drop-shadow-lg">
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
          <Route
            path="/countries/:country"
            element={
              <CountryPage
                countriesList={countriesList}
                getCountries={getCountries}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
