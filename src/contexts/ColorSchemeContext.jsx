import React, { createContext, useContext, useState } from 'react';

const ColorSchemeContext = createContext(null);

export const themes = {
  gold: {
    primary: 'amber',
    secondary: 'orange',
    accent: 'yellow'
  },
  emerald: {
    primary: 'emerald',
    secondary: 'green',
    accent: 'teal'
  },
  rose: {
    primary: 'rose',
    secondary: 'pink',
    accent: 'red'
  }
};

export function ColorSchemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(themes.gold);

  const value = {
    currentTheme,
    themes,
    changeTheme: (themeName) => setCurrentTheme(themes[themeName])
  };

  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  const context = useContext(ColorSchemeContext);
  if (context === null) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
}