import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './services/store';
import { DogAppThemeProvider } from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DogAppThemeProvider>
          <App />
        </DogAppThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
