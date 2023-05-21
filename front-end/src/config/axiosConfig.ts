import axios from 'axios';
axios.defaults.withCredentials = true
export const baseURL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8080/'

const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
});

export default instance