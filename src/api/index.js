import axios from "axios";

export const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
});
