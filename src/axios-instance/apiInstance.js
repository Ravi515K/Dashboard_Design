import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://uatapicorporatetravel.fynity.in/api',
  timeout:5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // No Authorization header initially
  },
});
export default axiosInstance