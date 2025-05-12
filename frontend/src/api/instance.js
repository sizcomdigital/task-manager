import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://task-manager-721u.onrender.com',
  withCredentials: false, 
});

export default axiosInstance;
