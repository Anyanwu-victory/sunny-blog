
// utils/fetchUser.js
import client from '../client';

export const fetchUser = async (userId) => {
  const query = `*[_type == "user" && _id == "${userId}"]`;
  const user = await client.fetch(query);
  return user[0];

};


// export const fetchUser = () => {
//     const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

//   return userInfo;
    
// }

