import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? (
        <span className="flex items-center gap-2 cursor-pointer">
          <Moon /> Dark
        </span>
      ) : (
        <span className="flex items-center gap-2 cursor-pointer">
          <Sun /> Light
        </span>
      )}
    </button>
  );
};

export default ToggleTheme;
