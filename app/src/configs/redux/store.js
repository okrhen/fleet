import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";

import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import mainReducer from "./reducers/main";
import mainSaga from "./saga/main";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(persistConfig, mainReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(mainSaga);

export { store, persistor };
