import React, { useState, useContext, ReactNode, createContext } from "react";

// In TypeScript, <ThemeContextType> denotes a type parameter, which is used to specify the type of value that a generic type or function will operate on.
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

//So, the line "class ThemeContextProvider extends Component<{ children: ReactNode }> {} " is defining a class component named ThemeContextProvider and specifying that it expects to receive a prop named children, which can be of any type that is a valid React node.

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

//const useThemeContext = () => useContext(ThemeContext);: This line declares a constant named useThemeContext. This constant is initialized with an arrow function expression () => useContext(ThemeContext).
export const useThemeContext = () => useContext(ThemeContext);
