// import React, { useState } from 'react';
// import { fetchUser } from '../utils/fetchUser';
// import client from '../client';



// const SignInForm = ({toggleSignIn,onSubmit}) => {
//     const user = fetchUser(); 

//     const [email, setEmail] = useState('');
//     const [username,setUsername] =useState('')
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ username, email, password });
//   };

//   const handleSignInSubmit = (userData) => {

//     client.createIfNotExists({
//       _id: userData.id, // Using email as _id, adjust as needed
//       _type: 'user',
//       username: userData.username,
//       email: userData.email,
//       password: userData.password,
//     })
//     .then(() => {
//       alert('Sign-in successful!');
//     })
//     .catch(error => {
//       console.error('Sign-in error:', error);
//       alert('There was an error during sign-in.');
//     });
//   };

//   return (
//     <>

//     <div className=" fixed top-10 left-10 w-[100%] 
//     h-[60%] flex justify-center align-middle ">
//       <div className="bg-white p-5 border 
//       rounded-lg shadow-md w-[300px] max-w-[80%]">
//         <button onClick={toggleSignIn} 
//         className=" bg-none text-2xl absolute top-[10px] 
//         right-[285px] cursor-pointer">X</button>
//         <h2 className='mb-[20px]'>Sign In</h2>

//         <form className='flex flex-col' onSubmit={handleSubmit}>

//         <label className='mb-3'>
//             Username:
//             <input type="username"
//              name="username" 
//              onChange={(e) => setUsername(e.target.value)}
//              required 
//              className='p-3 mt-2 w-[17rem] border border-solid border-[#ccc]'/>
//           </label>

//           <label className='mb-3'>
//             Email:
//             <input type="email"
//              onChange={(e) => setEmail(e.target.value)} 
//             name="email" required 
//              className='p-3 mt-2 w-[17rem] border border-solid border-[#ccc]'/>
//           </label>

//           <label className='mb-3'>
//             Password:
//             <input type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"  required 
//              className='p-3 mt-2 w-[17rem] border border-solid border-[#ccc]'/>
//           </label>
//           <button type="submit"
//           onClick={handleSignInSubmit}
//            className='p-3 rounded-md bg-[#28a745] text-white cursor-pointer hover:bg-[#218838]'>Sign In</button>
//         </form>
//       </div>
//     </div>
                 
    
//     </>
//   )
// };

// export default SignInForm;