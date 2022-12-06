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

  //Display all of the countries from the getCountries() immediately.
  useEffect(() => {
    getCountries();
  }, []);

  //A function to get all the countries to display on screen.
  const getCountries = () => {
    fetch(
      `https://restcountries.com/v2/all?fields=name,capital,region,population,flag`
    )
      .then((resolve) => resolve.json())
      .then(setCountriesList);
  };

  //A function to filter all the countries.
  const filterCountries = (countriesList: countriesListType): void => {
    setSearchResult(
      countriesList.filter((country) =>
        country.name.toLowerCase().startsWith(query.toLowerCase())
      )
    );
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
                handleFilterCountries={filterCountries}
                countriesList={countriesList}
              />
              <div className="mt-16 p-16 grid grid-flow-row place-items-start gap-12 md:grid-cols-2 lg:grid-cols-4">
                {!query
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
