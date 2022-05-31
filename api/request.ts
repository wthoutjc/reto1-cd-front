import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://reto1-cd-front-arpk4lfe8-wthoutjc.vercel.app/api' : 'http://localhost:3000/api'

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;
