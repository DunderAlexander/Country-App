import tempData from "./assets/tempdata";
import CountryCard from "./components/CountryCard";
import { Header } from "./components/Header";
import Inputs from "./components/Inputs";

const App = () => {
  return (
    <>
      <Header />
      <Inputs />
      <div className="mt-16 p-16 grid grid-flow-row place-items-center gap-12 md:grid-cols-2 lg:grid-cols-4">
        {tempData.map((country) => (
          <CountryCard
            name={country.name}
            capital={country.capital}
            region={country.region}
            population={country.population}
            flag={country.flag}
          />
        ))}
      </div>
    </>
  );
};

export default App;
