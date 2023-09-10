import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
});
