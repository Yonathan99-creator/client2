import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Landing from './components/landing/Landing';

function App() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
}

export default App;