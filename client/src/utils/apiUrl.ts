import axios from 'axios';

const apiUrl = import.meta.env.VITE_APP_API_URL

const instance = axios.create({
  baseURL: apiUrl
});

console.log({apiUrl})
export default apiUrl;