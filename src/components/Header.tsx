import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-DarkBlue py-8 px-5 shadow-md">
      <span className="font-semibold text-White text-lg">
        Where in the world?
      </span>
      <span className="text-White font-semibold text-lg">
        <FontAwesomeIcon
          icon={faMoon}
          style={{ marginRight: "1rem", rotate: "-30deg", cursor: "pointer" }}
        />
        Dark Mode
      </span>
    </div>
  );
};
