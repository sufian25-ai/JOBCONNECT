import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/jobconnect/backend",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
