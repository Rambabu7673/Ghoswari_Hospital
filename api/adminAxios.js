import axios from "axios";

export const adminApi = axios.create({
  baseURL: "https://hospital-ba.onrender.com/api",
});
