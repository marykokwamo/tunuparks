import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import App from './App';
import './index.css';

const paypalOptions = {
  "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "USD",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <PayPalScriptProvider options={paypalOptions}>
          <App />
        </PayPalScriptProvider>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);