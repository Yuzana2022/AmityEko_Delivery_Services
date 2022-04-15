import axios from "axios";

const baseURL = process.env.REACT_APP_API_ENDPOINT;

export default axios.create({
  baseURL
});