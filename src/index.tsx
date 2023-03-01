import React from 'react';
import ReactDOM from 'react-dom';

import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configStore } from 'store';

import { showAlert } from 'actions';

import ErrorHandler from 'components/ErrorHandler';
import Loader from 'components/Loader';
import Reload from 'components/Reload';
import GlobalStyles from 'containers/GlobalStyles';

import reportWebVitals from './reportWebVitals';
import Root from './Root';
import { register } from './serviceWorkerRegistration';
import { msalConfig } from 'authConfig';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";


const { persistor, store } = configStore();

window.store = store;
/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);
ReactDOM.render(
  <Provider store={store}>
     <MsalProvider instance={msalInstance}>
    <PersistGate loading={<Loader block size={100} />} persistor={persistor}>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <HelmetProvider>
          <Root />
        </HelmetProvider>
      </ErrorBoundary>
      <GlobalStyles />
    </PersistGate>
    </MsalProvider>
  </Provider>,
  document.getElementById('root'),
);

/* istanbul ignore next */
register({
  onUpdate: () => {
    store.dispatch(showAlert(<Reload />, { id: 'sw-update', icon: 'bolt', timeout: 0 }));
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); // eslint-disable-line no-console
