import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: "https://api.siscount.com.br/",
  timeout: 15000,
});