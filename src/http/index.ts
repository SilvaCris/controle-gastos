import axios from "axios";

const http = axios.create({
  baseURL: "https://controle-gastos-back.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;