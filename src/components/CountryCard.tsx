import { Link } from "react-router-dom";

type CountryCardProps = {
  name: string;
  capital: string | undefined;
  region: string;
  population: number;
  flag: string;
};

const CountryCard = ({
  name,
  capital,
  region,
  population,
  flag,
}: CountryCardProps) => {
  return (
    <div className="bg-White dark:bg-DarkBlue rounded-md ">
      <Link to={`/countries/${name}`}>
        <img
          className="rounded-t-md aspect-video object-cover cursor-pointer"
          src={flag}
          alt={name}
        />
      </Link>
      <article className="py-10 px-6 text-VeryDarkBlue_LM dark:text-White">
        <h1 className="pb-6  font-bold text-xl">{name}</h1>
        <p>
          <b>Population:</b> {population.toLocaleString("nl-NL")}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital ? capital : "None"}
        </p>
      </article>
    </div>
  );
};

export default CountryCard;
