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
    <div className="bg-DarkBlue rounded-md">
      <Link to={`/countries/${name}`}>
        <img
          className="rounded-t-md w-80 aspect-video object-cover cursor-pointer"
          src={flag}
          alt={name}
        />
      </Link>
      <article className="py-10 px-6">
        <h1 className="pb-6 text-White font-bold text-xl">{name}</h1>
        <p className="text-White">
          <b>Population:</b> {population}
        </p>
        <p className="text-White">
          <b>Region:</b> {region}
        </p>
        <p className="text-White">
          <b>Capital:</b> {capital ? capital : "None"}
        </p>
      </article>
    </div>
  );
};

export default CountryCard;
