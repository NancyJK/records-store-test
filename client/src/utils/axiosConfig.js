import axios from "axios";

export const setAxiousDefaults = () => {
  import.meta.env.VITE_CLIENT_URL;

  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
};
