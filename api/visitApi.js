import axios from "axios";
export const response = axios.create({
  baseURL: "http://localhost:3000/user",
});


