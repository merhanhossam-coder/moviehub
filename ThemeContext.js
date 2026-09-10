import React, { createContext, useContext, useState } from 'react';

const lightColors = {
  background: '#F5F3FF',
  card: '#FFFFFF',
  text: '#2D2A4A',
  subtext: '#6B6889',
  primary: '#6C63FF',
  border: '#E5E1FF',
};

const darkColors = {
  background: '#1E1B2E',
  card: '#2A2740',
  text: '#F5F3FF',
  subtext: '#B8B5D6',
  primary: '#8A82FF',
  border: '#3B3760',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ colors, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
