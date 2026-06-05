import axios from "axios"
export const api = axios.create({
  baseURL: "https://hospital-ba.onrender.com/user",
});