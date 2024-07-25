import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeName } from "../../style/theme";

interface Props {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
}

const ThemeSwicher = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return(
    <button onClick={toggleTheme}>{themeName}</button>
  );
}

export default ThemeSwicher;