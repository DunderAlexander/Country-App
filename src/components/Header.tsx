import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../redux/slices/countriesSlice";
import { RootState } from "../redux/store";

export const Header = () => {
  const { dark } = useSelector((state: RootState) => state.countries);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between items-center bg-White dark:bg-DarkBlue py-8 px-16 shadow-md text-VeryDarkBlue_LM dark:text-White font-semibold text-lg">
      <span className="font-black ">Where in the world?</span>
      <span>
        <FontAwesomeIcon
          icon={faMoon}
          style={{ marginRight: "1rem", rotate: "-30deg", cursor: "pointer" }}
          onClick={() => dispatch(setDark())}
        />
        {dark ? "Light mode" : "Dark mode"}
      </span>
    </div>
  );
};
