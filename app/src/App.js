import React from "react";
import AppRouter from "./configs/router";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./configs/redux/store";

/**
 * initializing icon fonts
 */
import "./components/Icon/icon-init";
import "./styles/main.scss";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);

export default App;
