import axios, { AxiosInstance } from 'axios';

const API_KEY = 'c2ca0387';
export const OMDBInstance: AxiosInstance = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${API_KEY}`,
  headers: {
    'Content-Type': 'application/json'
  }
});
export const LocalServerInstance: AxiosInstance = axios.create({
  baseURL: `/users`,
  headers: {
    'Content-Type': 'application/json'
  }
});
