import axios from 'axios';

import errorHandler from './errorHandler';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => errorHandler(error, axiosInstance)
// );

// export default axiosInstance;
