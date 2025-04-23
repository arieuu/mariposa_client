import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from './components/ui/provider.tsx';
import { ColorModeProvider, DarkMode } from './components/ui/color-mode.tsx';
import { Box } from '@chakra-ui/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider> <App /> </ColorModeProvider>
    </Provider>
  </StrictMode>
);
