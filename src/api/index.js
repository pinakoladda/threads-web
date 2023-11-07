import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.threads.shtepcell.com",
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
});
