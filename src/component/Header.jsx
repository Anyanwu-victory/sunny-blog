import React, { useState } from "react";
import logoLight from "../assets/images/logoLight.png";
import logoDark from "../assets/images/logoDark.png";
import logoFlower from "../assets/images/flower.png";
import logoSunny from "../assets/images/logoSunny.png";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import { fetchUser } from "../utils/fetchUser";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const user = fetchUser();
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDestination = () => {
    setIsDestinationOpen(!isDestinationOpen);
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            {/* Logo */}
            <span>
              <a
                href="*"
                className="flex items-center  rtl:space-x-reverse md:ml-[-3rem]"
              >
                <img src={logoSunny} className="h-14 " alt="Sunny Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Sunny
                </span>
              </a>
            </span>

            <div className="relative flex items-center md:order-2 space-x-3 
            md:space-x-0 rtl:space-x-reverse">
      <button 
        onClick={toggleMenu}
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4
         focus:ring-gray-300 dark:focus:ring-gray-600" 
        id="user-menu-button" 
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown" 
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={user.picture} alt="user photo" />
      </button>
      
      {/* <!-- Dropdown menu --> */}
      {isMenuOpen && (
        <div className="absolute right-0 top-0.5 z-50 mt-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link to="/">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Home</a>
              </Link>
            </li>
            {/* Sign In button */}
            <li>
              <Login>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
               dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Sign in
                </a>
              </Login>
            </li>

            <li>
              <button onClick={toggleSignIn} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
               dark:hover:bg-gray-600 dark:text-gray-200
                dark:hover:text-white">Sign In with Email</button>
                {showSignIn && <SignInForm toggleSignIn={toggleSignIn} />}       
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
               dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      )}
      {/* Dropdown menu for profile */}

      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex
       items-center p-2 w-10 h-10 justify-center text-sm text-gray-500
        rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Toggle Menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    </div>
    {/* Menu starts here */}
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" 
  id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border
         border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse
          md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <Link to="/">
      <li>
        <a href="#" className="block py-2 px-3 text-white
         bg-blue-700 rounded md:bg-transparent md:text-blue-700 
         md:p-0 md:dark:text-yellow-500" aria-current="page">Home</a>
      </li>
      </Link>

      <Link to="/about">
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded
         hover:bg-gray-100 md:hover:bg-transparent
          md:hover:text-emerald-600 md:p-0 dark:text-white
           md:dark:hover:text-emerald-900 dark:hover:bg-gray-700
            dark:hover:text-white md:dark:hover:bg-transparent
             dark:border-gray-700DDDD">About Me</a>
      </li>
      </Link>
       
       <Link to="/blog">
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded
         hover:bg-gray-100 md:hover:bg-transparent
          md:hover:text-blue-700 md:p-0 dark:text-white
           md:dark:hover:text-emerald-900 dark:hover:bg-gray-700
            dark:hover:text-white md:dark:hover:bg-transparent
             dark:border-gray-700">Blogs</a>
      </li>
      </Link>

      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded
         hover:bg-gray-100 md:hover:bg-transparent
          md:hover:text-blue-700 md:p-0 dark:text-white
           md:dark:hover:text-blue-500 dark:hover:bg-gray-700
            dark:hover:text-white md:dark:hover:bg-transparent
             dark:border-gray-700">Merch</a>
      </li>
      <li>
        <a href="#" 
        class="block py-2 px-3 text-gray-900 rounded
         hover:bg-gray-100 md:hover:bg-transparent 
         md:hover:text-blue-700 md:p-0 dark:text-white
          md:dark:hover:text-blue-500 dark:hover:bg-gray-700
           dark:hover:text-white md:dark:hover:bg-transparent
            dark:border-gray-700">Comments</a>
      </li>
    </ul>
    </div>

    {/* Menu Ends here */}
          </div>
        </nav>
        
      </header>
    </>
  );
};

export default Header;
