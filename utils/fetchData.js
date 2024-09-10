import axios from '../configs';
import Cookies from 'js-cookie';

export function getData(url, params, token) {
  return axios.get(`${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postData(url, payload, token) {
  return await axios.post(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function putData(url, payload, token) {
  return await axios.put(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// export async function getData(url, payload, token) {
//     try {
//         refreshToken = Cookies.get("refreshToken")
//         email = Cookies.get("email")

//     } catch (error) {

//     }
//     return await axios.put(`${url}`, payload, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   }

// export async function getServerSideProps(context) {
//   const { token } = context.req.cookies;

//   if (!token) {
//     if (!context.params.refreshToken) {
//       return {
//         redirect: {
//           destination: '/signin',
//           permanent: false,
//         },
//       };
//     } else {
//       const req = await getData(
//         `api/v1/refresh-token/${context.params.refreshToken}/${context.params.email}`
//       );
//       const res = req.data;
//       Cookies.set("token", res.token)
//       console.log('res');
//       console.log(res);
//     }
//   }
//   //   console.log('res');
//   //   console.log(res);
//   return {
//     props: {},
//   };
// }
