import React from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <button
      className="theme-toggle"
      aria-label="Toggle dark mode"
      onClick={() => setDarkMode((d) => !d)}
      type="button"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? (
        <Sun size={20} className="text-gold" />
      ) : (
        <Moon size={20} className="text-gold" />
      )}
    </button>
  );
};
export default ThemeToggle;
