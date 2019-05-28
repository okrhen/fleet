import { spawn, all } from "redux-saga/effects";

import homeSaga from "./home";

const rootSagas = [homeSaga];

// Combine sagas
export default function* mainSaga() {
  yield all(rootSagas.map(saga => spawn(saga)));
}
