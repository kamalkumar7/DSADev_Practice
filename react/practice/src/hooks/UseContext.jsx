import React, { createContext, useContext } from 'react';

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Create a provider component
const ThemeProvider = ({ children }) => {
  const theme = 'dark'; // Try changing this to 'light'

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Consume the context in a child component
const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  const style = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px'
  };

  return <button style={style}>I’m a {theme} button</button>;
};

// Step 4: Wrap everything with the provider
const UseContextExample = () => (
  <ThemeProvider>
    <ThemedButton />
  </ThemeProvider>
);

export default UseContextExample;