import httpFetch from "./api-default";

const httpFetchRestaurants = () =>
  httpFetch("/restaurants")
    .then(res => res.data)
    .catch(() => []);

export { httpFetchRestaurants };
