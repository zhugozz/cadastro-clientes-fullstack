import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333", // URL do seu backend Node
});

export default api;
