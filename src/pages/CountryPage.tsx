import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const CountryPage = () => {
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
    return (
      <h1 className="flex flex-col justify-center items-center text-White font-bold">
        Loading...
      </h1>
    );
  }
  return (
    <>
      <Link to={"/"}>
        <button className="bg-DarkBlue mt-12 ml-16 py-2 px-8 drop-shadow-lg text-White font-thin">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ paddingRight: "12px" }}
          />
          Back
        </button>
      </Link>

      <div className="flex flex-col justify-center items-center text-White">
        <img src={countryInfo[0].flags.svg} alt="" style={{ width: "250px" }} />
        <h1>{countryInfo[0].name}</h1>
        <div>
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
        <div>
          <p>
            <b>Top Level Domain:</b> {countryInfo[0].topLevelDomain.join(", ")}
          </p>
          <p>
            <b>Currencies:</b>{" "}
            {countryInfo[0].currencies
              ? countryInfo[0].currencies.map((curr: any) => curr.name)
              : "None"}
          </p>
          <p>
            <b>Languages</b>{" "}
            {countryInfo[0].languages.map((lang: any, index: number) =>
              countryInfo[0].languages.length - 1 > index
                ? `${lang.name}, `
                : `${lang.name}`
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
