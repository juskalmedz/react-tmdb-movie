import axios from "axios";

const API_KEY = "70e79ce04a3ea177fe15eedfa5c4d6f0";
const baseUrl = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
