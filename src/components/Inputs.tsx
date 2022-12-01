import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Inputs = () => {
  return (
    <div className="py-6 px-5 drop-shadow-md flex flex-col">
      <form
        action=""
        className="flex flex-col gap-10 md:flex-row md:justify-between relative"
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            position: "absolute",
            transform: "translate(120%, 125%)",
            color: "white",
          }}
        />
        <input
          className="p-4 pl-12 bg-DarkBlue text-White rounded-lg md:w-1/3"
          type="search"
          placeholder="Search for a country..."
        />
        <select className="p-4 bg-DarkBlue text-White rounded-lg w-1/2 md:w-[15rem]">
          <option>Filter by Region</option>
          <option value="America">America</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </select>
      </form>
    </div>
  );
};

export default Inputs;
