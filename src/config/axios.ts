import Axios from "axios";
import { camelizeKeys } from "humps";

const axios = Axios.create({ baseURL: process.env.REACT_APP_TMDB_BASE_URL });

// Axios interceptor to attach access token to all api requests
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`;

  return config;
});

// Axios interceptor to convert all api responses to camelCase
axios.interceptors.response.use((response) => {
  response.data = camelizeKeys(response.data);

  return response;
});

export default axios;
