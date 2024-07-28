import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sunny from '../assets/images/flower.png';
import 'flowbite';
import 'flowbite-react';
import client from "../client";
import { fetchUser } from "../utils/fetchUser";
import Login from "../pages/Login";
import Logout from "../pages/Logout";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [user, setUser] = useState(null);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchedUser = fetchUser();
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, []);

  return (
    <>
      <div className="relative pb-[5rem]">
        <nav className="absolute top-0 left-0 w-full bg-transparent border-gray-200 text-black z-10">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-7">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={sunny} className="h-8" alt="star" />
              <span className="font-bold text-3xl">Sunny</span>
            </a>

            <div className="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
              <button
                onClick={toggleList}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
                aria-controls="navbar-hamburger"
              >
                <span className="sr-only">Toggle menu</span>
                {isListOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                    <g fill="#D0D6F9" fillRule="evenodd">
                      <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                      <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                    </g>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                    <g fill="#D0D6F9" fillRule="evenodd">
                      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                    </g>
                  </svg>
                )}
              </button>

              <button
                onClick={toggleMenu}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-[#3e1943] dark:focus:ring-gray-600"
                aria-expanded="false"
              >
                <span className="sr-only">Open user menu</span>
                {user && user.picture ? (
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.picture}
                    alt="user face"
                  />
                ) : (
                  <span className="text-white">User</span>
                )}
              </button>
            </div>

            <div
              className={`${isListOpen ? 'block bg-yellow-300 h-[11rem]' : 'hidden'} w-full text-black md:block md:w-auto`}
              id="navbar-hamburger"
            >
              <ul className="font-medium flex flex-col md:flex-row md:space-x-8 md:items-center text-center">
                <li>
                  <Link
                    to='/'
                    className="block py-2 px-3 text-black uppercase md:text-black md:p-0"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/blog'
                    className="block py-2 px-3 text-white uppercase md:text-black md:p-0"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className="block py-2 px-3 mb-[0.1rem]
                     text-white uppercase md:text-black md:p-0 lg:mb-0"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/create"
                    className="py-3 px-6 mt-6 hidden
                     bg-black w-[6rem] border rounded-md text-white
                      uppercase md:text-black md:p-0 lg:block lg:mt-0 lg:w-[9rem] lg:text-white lg:py-3 lg:rounded-lg lg:px-5"
                  >
                    <button>Create</button>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
              <button
                onClick={toggleMenu}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-[#3e1943] dark:focus:ring-gray-600"
                aria-expanded="false"
              >
                <span className="sr-only">Open user menu</span>
                {user && user.picture ? (
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.picture}
                    alt="user face"
                  />
                ) : (
                  <span className="text-white">User</span>
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="absolute right-0 top-0 mt-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {user ? user.name : "No username"}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {user ? user.email : "No email"}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/create"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Create
                  </Link>
                </li>
                <li>
                  <Login>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign in
                  </Link>
                  </Login>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;


// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isListOpen, setIsListOpen] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [user, setUser] = useState(null);

//   const toggleSignIn = () => {
//     setShowSignIn(!showSignIn);
//   };

//   const toggleList = () => {
//     setIsListOpen(!isListOpen);
//   }

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const fetchedUser = fetchUser();
//     if (fetchedUser) {
//       setUser(fetchedUser);
//     }
//   }, []);

//   return (
//     <>
//       <div className="relative pb-[5rem]">
//         <nav className="absolute top-0 left-0 w-full bg-transparent border-gray-200 text-black z-10">
//           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-7">
//             <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//               <img src={sunny} className="h-8" alt="star" />
//               <span className="font-bold text-3xl">Sunny</span>
//             </a>

//             <div className="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
//               <button
//                 onClick={toggleList}
//                 type="button"
//                 className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
//                 aria-controls="navbar-hamburger"
//               >
//                 <span className="sr-only">Toggle menu</span>
//                 {isListOpen ? (
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
//                     <g fill="#D0D6F9" fillRule="evenodd">
//                       <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
//                       <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
//                     </g>
//                   </svg>
//                 ) : (
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
//                     <g fill="#D0D6F9" fillRule="evenodd">
//                       <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
//                     </g>
//                   </svg>
//                 )}
//               </button>

//               <button
//                 onClick={toggleMenu}
//                 type="button"
//                 className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-[#3e1943] dark:focus:ring-gray-600"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open user menu</span>
//                 {user && user.image ? (
//                   <img
//                     className="w-8 h-8 rounded-full"
//                     src={user.image}
//                     alt="user face"
//                   />
//                 ) : (
//                   <span className="text-white">User</span>
//                 )}
//               </button>
//             </div>

//             <div
//               className={`${isListOpen ? 'block bg-yellow-300 h-[11rem]' : 'hidden'} w-full text-black md:block md:w-auto`}
//               id="navbar-hamburger"
//             >
//               <ul className="font-medium flex flex-col md:flex-row md:space-x-8 md:items-center text-center">
//                 <li>
//                   <Link
//                     to='/'
//                     className="block py-2 px-3 text-black uppercase md:text-black md:p-0"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to='/blog'
//                     className="block py-2 px-3 text-white uppercase md:text-black md:p-0"
//                   >
//                     Blogs
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to='/contact'
//                     className="block py-2 px-3 mb-[0.1rem]
//                      text-white uppercase md:text-black md:p-0 lg:mb-0"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/create"
//                     className="py-3 px-6 mt-6 hidden
//                      bg-black w-[6rem] border rounded-md text-white
//                       uppercase md:text-black md:p-0 lg:block lg:mt-0 lg:w-[9rem] lg:text-white lg:py-3 lg:rounded-lg lg:px-5"
//                   >
//                     <button>Create</button>
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
//               <button
//                 onClick={toggleMenu}
//                 type="button"
//                 className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-[#3e1943] dark:focus:ring-gray-600"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open user menu</span>
//                 {user && user.image ? (
//                   <img
//                     className="w-8 h-8 rounded-full"
//                     src={user.image}
//                     alt="user face"
//                   />
//                 ) : (
//                   <span className="text-white">User</span>
//                 )}
//               </button>
//             </div>
//           </div>

//           {isMenuOpen && (
//             <div className="absolute right-0 top-0 mt-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
//               <div className="px-4 py-3">
//                 <span className="block text-sm text-gray-900 dark:text-white">
//                   {user ? user.username : "No username"}
//                 </span>
//                 <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
//                   {user ? user.email : "No email"}
//                 </span>
//               </div>
//               <ul className="py-2" aria-labelledby="user-menu-button">
//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/create"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Create
//                   </Link>
//                 </li>
//                 <li>
//                   <Login>
//                   <Link
//                     to="/login"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Sign in
//                   </Link>
//                   </Login>
//                 </li>

//                 <li>
//                   <Link
//                     to="/logout"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Sign out
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;
