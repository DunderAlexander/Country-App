import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFilterRegion, setQuery } from "../redux/slices/countriesSlice";

const Inputs = () => {
  const { query, filterRegion } = useSelector(
    (state: RootState) => state.countries
  );
  const dispatch = useDispatch();
  return (
    <div className="py-6 px-14 drop-shadow-md flex flex-col">
      <form
        action=""
        className="flex flex-col gap-10 md:flex-row md:justify-between relative"
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            position: "absolute",
            transform: "translate(120%, 125%)",
          }}
          className="dark:text-White text-DarkGray"
        />
        <input
          className="p-4 pl-12 bg-White dark:bg-DarkBlue text-VeryDarkBlue_LM dark:text-White rounded-lg md:w-1/3"
          type="search"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => {
            dispatch(setQuery(e.target.value));
          }}
        />
        <select
          className="p-4 bg-White dark:bg-DarkBlue text-VeryDarkBlue_LM dark:text-White rounded-lg w-1/2 md:w-[15rem]"
          onChange={(e) => {
            dispatch(setFilterRegion(e.target.value));
          }}
          value={filterRegion}
        >
          <option>Filter by Region</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Americas">America</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default Inputs;
