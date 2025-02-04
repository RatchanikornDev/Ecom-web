import axios from 'axios'

export const currentUser = async (token) =>
  await axios.post(
    'https://ecom-api-blond.vercel.app/api/current-user',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  export const currentAdmin = async (token) => {
    console.log('Token:', token); // ตรวจสอบ token
    return await axios.post(
      'https://ecom-api-blond.vercel.app/api/current-admin',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
