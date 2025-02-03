// utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL+'/api' || 'http://127.0.0.1:8000/api',  // Default to localhost or use environment variable
  timeout: 10000,  // Optional: set timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // "lora": "lussan"
  },
  
});

export default axiosInstance;