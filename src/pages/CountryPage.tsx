import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryPage = () => {
  const { country } = useParams();

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
      <div className="flex flex-col justify-center content-center text-White text-[10rem] text-center font-bold">
        {country}
      </div>
    </>
  );
};

export default CountryPage;
