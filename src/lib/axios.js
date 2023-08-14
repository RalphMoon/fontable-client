import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_SERVER_URI,
  params: {},
  timeout: 2500,
});
