import axios from "axios";

export const request = axios.create({
  baseURL: "http://api.threads.shtepcell.com:3000",
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
});
