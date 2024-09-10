// import Cookies from 'js-cookie';
// import { getData } from '../utils/fetchData';

import { toast } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function errorHandler(error) {
  // if (error.response.data.msg === 'jwt expired') {
  //   const originalRequest = error.config;
  //   const refreshToken = Cookies.get('refreshToken');
  //   const email = Cookies.get('email');

  //   axios
  //     .get(`api/v1/refresh-token/${refreshToken}/${email}`)
  //     .then((res) => {
  //       console.log('res');
  //       console.log(res);
  //       localStorage.setItem(
  //         'auth',
  //         JSON.stringify({
  //           ...session,
  //           token: res.data.data.token,
  //         })
  //       );
  //       originalRequest.headers.Authorization = `Bearer ${res.data.data.token}`;

  //       console.log('originalRequest');
  //       console.log(originalRequest);

  //       return axios(originalRequest);
  //     })
  //     .catch((err) => {
  //       // window.location.href = '/signin';
  //       // localStorage.removeItem('auth');
  //     });
  // }

  if (error) {
    let message;
    if (error.response) {
      message = error.response.data.msg;

      if (typeof message === 'string') toast.error(message);

      return Promise.reject(error);
    }
  }
}

// export default function errorHandler(error) {
//   console.log('error');
//   console.log(error);

//   if (error.response.data.msg === 'jwt expired') {
//     // originalRequest._retry = true;
//     refreshToken = Cookies.get('refreshToken');
//     console.log('refreshToken');
//     console.log(refreshToken);
//     email = Cookies.get('email');
//     const res = getData(`api/v1/refresh-token/${refreshToken}/${email}`);
//     //   const res = req.data;
//     console.log('req');
//     console.log(res.data.token);
//     Cookies.set('token', res.data.token);
//   } else {
//     let message;
//     if (error.response) {
//       message = error.response.data.msg;

//       if (typeof message === 'string') toast.error(message);

//       return Promise.reject(error);
//     }
//   }
// }

// export async function getServerSideProps(context) {
//   const { token } = context.req.cookies;

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/signin',
//         permanent: false,
//       },
//     };
//   }
//   const req = await getData(`api/v1/events/${context.params.id}`);

//   const res = req.data;
//   //   console.log('res');
//   //   console.log(res);
//   return {
//     props: { detailPage: res },
//   };
// }
