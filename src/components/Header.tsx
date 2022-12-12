import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ toggleDarkMode }: any) => {
  return (
    <div className="flex flex-row justify-between items-center bg-White dark:bg-DarkBlue py-8 px-16 shadow-md text-VeryDarkBlue_LM dark:text-White font-semibold text-lg">
      <span className="font-black ">Where in the world?</span>
      <span>
        <FontAwesomeIcon
          icon={faMoon}
          style={{ marginRight: "1rem", rotate: "-30deg", cursor: "pointer" }}
          onClick={(e) => {
            toggleDarkMode();
          }}
        />
        Dark Mode
      </span>
    </div>
  );
};
