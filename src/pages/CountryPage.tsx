import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { countriesListType } from "../App";

const CountryPage = ({ countriesList }: any) => {
  const { country } = useParams();
  const [countryInfo, setCountryInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  // fetchCountryInfo has a callback function in it to make sure that loading would be set to false
  const fetchCountryInfo = (
    countryName: string | undefined,
    callback: () => void
  ): void => {
    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(setCountryInfo)
      .then(callback)
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCountryInfo(country, () => {
      setIsLoading(false);
    });
  }, [country]);

  if (isLoading) {
    // TO DO: write a proper loader component
    return (
      <h1 className="flex flex-col justify-center items-center text-VeryDarkBlue_LM dark:text-White  font-bold">
        Loading...
      </h1>
    );
  }
  return (
    <>
      <Link to={"/"}>
        <button className="bg-White dark:bg-DarkBlue mt-12 ml-16 py-2 px-8 drop-shadow-lg text-VeryDarkBlue_LM dark:text-White font-thin">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ paddingRight: "12px" }}
          />
          Back
        </button>
      </Link>

      <div className="text-VeryDarkBlue_LM dark:text-White grid place-content-center gap-10 mt-14 mx-[64px] lg:grid-cols-2 lg:gap-x-28">
        <img
          src={countryInfo[0].flags.svg}
          alt={countryInfo[0].name}
          className="drop-shadow-md"
        />
        <div className="lg:grid lg:grid-cols-2 lg:place-content-center lg:gap-y-14 flex flex-col gap-10">
          <div className="flex flex-col gap-3 lg:justify-center">
            <h1 className="font-bold text-2xl my-5">{countryInfo[0].name}</h1>
            <p>
              <b>Native Name:</b>{" "}
              {countryInfo[0].nativeName ? countryInfo[0].nativeName : "None"}
            </p>
            <p>
              <b>Population:</b>{" "}
              {countryInfo[0].population.toLocaleString("nl-NL")}
            </p>
            <p>
              <b>Region:</b> {countryInfo[0].region}
            </p>
            <p>
              <b>Sub Region:</b> {countryInfo[0].subregion}
            </p>
            <p>
              <b>Capital:</b>{" "}
              {countryInfo[0].capital ? countryInfo[0].capital : "None"}
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:justify-center">
            <p>
              <b>Top Level Domain:</b>{" "}
              {countryInfo[0].topLevelDomain.join(", ")}
            </p>
            <p>
              <b>Currencies:</b>{" "}
              {countryInfo[0].currencies
                ? countryInfo[0].currencies.map((curr: any, index: number) =>
                    countryInfo[0].currencies.length - 1 > index
                      ? `${curr.name}, `
                      : `${curr.name}`
                  )
                : "None"}
            </p>
            <p>
              <b>Languages:</b>{" "}
              {countryInfo[0].languages.map((lang: any, index: number) =>
                countryInfo[0].languages.length - 1 > index
                  ? `${lang.name}, `
                  : `${lang.name}`
              )}
            </p>
          </div>
          <div className="flex flex-col mb-12 col-span-2">
            <h2 className="text-xl font-semibold">Border Countries:</h2>
            {countryInfo[0].borders ? (
              <div className="grid grid-cols-4 gap-3 mt-5">
                {" "}
                {countryInfo[0].borders.map((alpha3Code: string) => {
                  const fullName = countriesList.find(
                    (obj: any) => obj.alpha3Code === alpha3Code
                  );
                  return (
                    <Link to={`../countries/${fullName.name}`}>
                      <button
                        className="flex flex-col items-center bg-White dark:bg-DarkBlue py-2 px-8 drop-shadow-lg text-VeryDarkBlue_LM dark:text-White font-thin text-xs text-center w-[100%]"
                        key={alpha3Code}
                      >
                        {fullName.name}
                      </button>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <span className="mt-4">No border countries to display.</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
