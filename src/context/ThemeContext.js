import React, { useEffect, useState } from 'react';

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  const isBrowserRender = typeof window !== 'undefined';
  const isDefaultDarkMode =
    !isBrowserRender ||
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) ||
    !localStorage.theme;

  const [isDarkMode, setDarkMode] = useState(isDefaultDarkMode);

  useEffect(() => {
    if (!isDarkMode) {
      localStorage.theme = 'light';
    } else {
      localStorage.theme = 'dark';
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, mode: isDarkMode ? 'dark' : 'light', setDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
