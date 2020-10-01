import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import withChildren from "types/with-children";

export const ThemeContext = createContext({
  theme: "light",
  toggleDarkTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({ children }: withChildren) {
  const [theme, setTheme] = useState({
    theme: "light",
  });

  const toggleDarkTheme = useCallback(() => {
    setTheme((currentState) => ({
      theme: currentState.theme === "dark" ? "light" : "dark",
    }));
  }, []);

  const value = useMemo(
    () => ({
      theme: theme.theme,
      toggleDarkTheme,
    }),
    [theme.theme, toggleDarkTheme]
  );

  useEffect(() => {
    if (theme.theme === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
