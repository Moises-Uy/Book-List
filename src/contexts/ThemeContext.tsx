import React, { useState, useContext, ReactNode, createContext } from "react";


interface Theme {
  syntax: string;
  ui: string;
  bg: string;
}

interface ThemeContextType {
  isLightTheme: boolean;
  light: Theme;
  dark: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isLightTheme: true,
  light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  toggleTheme: () => {},
});


export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeState, setThemeState] = useState<ThemeContextType>({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
    toggleTheme: () => {
      setThemeState((prevState) => ({
        ...prevState,
        isLightTheme: !prevState.isLightTheme,
      }));
    },
  });

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
