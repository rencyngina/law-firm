// MyContext.js
import React, { createContext, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeContextProvider = ({ children }) => {
  // Define the context value
  const contextValue = {
    darkMode: true, // Example: Theme context
    primaryColor: 'blue',
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useThemeContext = () => useContext(ThemeContext);
