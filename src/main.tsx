import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorSchemeProvider } from './contexts/ColorSchemeContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorSchemeProvider>
      <App />
    </ColorSchemeProvider>
  </StrictMode>
);