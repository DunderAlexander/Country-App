import CountryCard from "./components/CountryCard";
import { Header } from "./components/Header";
import Inputs from "./components/Inputs";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import { useEffect, useState } from "react";

// TODO: export all of the fetching and state logic into separate hook

type countriesListType = Array<{
  name: string;
  capital: string | undefined;
  region: string;
  population: number;
  flag: string;
  independent: boolean;
}>;

const App = () => {
  const [countriesList, setCountriesList] = useState<countriesListType>([]);
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<countriesListType>([]);
  const [filterRegion, setFilterRegion] = useState<string>("Filter by Region");

  // Display all of the countries from the getCountries() immediately.
  useEffect((): void => {
    getCountries();
  }, []);

  // useEffect(() => {
  //   setSearchResult(
  //     countriesList.filter((country) =>
  //       country.name.toLowerCase().startsWith(query.toLowerCase())
  //     )
  //   );
  // }, [query]);

  // useEffect(() => {
  //   if (filterRegion === "Filter by Region") {
  //     setSearchResult(countriesList);
  //   } else {
  //     setSearchResult(
  //       countriesList.filter((country) => country.region === filterRegion)
  //     );
  //   }
  // }, [filterRegion]);

  useEffect(() => {
    setSearchResult(
      countriesList.filter((country) => {
        // First, check if the country's name matches the query
        let matchesQuery = country.name
          .toLowerCase()
          .startsWith(query.toLowerCase());
        // Then, check if the country's region matches the filterRegion, unless filterRegion is "Filter by Region"
        let matchesRegion =
          filterRegion === "Filter by Region" ||
          country.region === filterRegion;
        // If the country matches both the query and region, return it
        return matchesQuery && matchesRegion;
      })
    );
  }, [query, filterRegion]);

  // A function to get all the countries to display on screen.
  const getCountries = (): void => {
    fetch(
      `https://restcountries.com/v2/all?fields=name,capital,region,population,flag`
    )
      .then((resolve) => resolve.json())
      .then(setCountriesList);
  };

  const filterCountries = (filterRegion: string): void => {
    // TO DO - write the actual function to filter countries by region. Make it work with searchCountries function.
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Inputs
                query={query}
                setQuery={setQuery}
                setFilterRegion={setFilterRegion}
              />
              <div className="mt-16 p-16 grid grid-flow-row place-items-start gap-12 md:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
};

export default App;
