import axios from "axios";

const httpFetch = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 5000
});

export default httpFetch;
