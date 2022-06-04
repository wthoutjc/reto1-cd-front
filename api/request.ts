import axios from "axios";

const BASE_URL = process.env.HOST_NAME;

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;
