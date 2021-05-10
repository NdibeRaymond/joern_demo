import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// import reportWebVitals from './reportWebVitals';

// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';
import { theme } from './assets/js/theme';

import App from './App';
import './assets/css/index.css';
// import configureStore from './store/configureStore';
// import './i18n';

// let { store, persistor } = configureStore();

ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Suspense fallback={null}>
            <App />
          </Suspense>
        </ThemeProvider>
      </React.StrictMode>,
//     </PersistGate>
//   </Provider>,
  document.getElementById('electron'),
);
