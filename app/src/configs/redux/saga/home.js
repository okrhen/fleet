import { FETCH_RESTAURANTS } from "../reducers/home";
import { takeLatest, call, put } from "redux-saga/effects";

import { httpFetchRestaurants } from "../../api/home";
import { RECEIVE_RESTAURANTS } from "../reducers/home";

function* fetchRestaurants() {
  const data = yield call(httpFetchRestaurants);

  const categories = [
    "All",
    ...data.reduce((a, b) => {
      let list = a;
      if (!list.includes(b.category)) {
        list.push(b.category);
      }
      return list;
    }, [])
  ].sort((a, b) => a.localeCompare(b));

  yield put({
    type: RECEIVE_RESTAURANTS,
    payload: {
      restaurants: data,
      categories
    }
  });
}

export default function* homeSaga() {
  yield takeLatest(FETCH_RESTAURANTS, fetchRestaurants);
}
