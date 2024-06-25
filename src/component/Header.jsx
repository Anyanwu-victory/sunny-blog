import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sunny from '../assets/images/flower.png';
import logoSunny from "../assets/images/logoSunny.png";
import Login from "../pages/Login";
import SignInForm from "../pages/Signin";
import 'flowbite';
import 'flowbite-react';
import { fetchUser } from "../utils/fetchUser";

const Header = () => {
  const user = fetchUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  // Toggle the SignInForm visibility
  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  // Toggle the main menu visibility
  const toggleList = () => {
    setIsListOpen(!isListOpen);
  }

  // Toggle the user menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative">
        <nav className="absolute top-0 left-0 w-full bg-transparent
         border-gray-200 text-white z-15">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-7">
            
            {/* Logo on the left */}
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={sunny} className="h-8" alt="star" />
              <span className="font-bold text-3xl">Sunny</span>
            </a>

            {/* Mobile Menu and User Menu toggles */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
              {/* Hamburger menu toggle */}
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

              {/* User menu toggle */}
              <button
                onClick={toggleMenu}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-[#3e1943] dark:focus:ring-gray-600"
                aria-expanded="false"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.picture}
                  alt="user photo"
                />
              </button>
            </div>

            {/* Main Navigation Menu */}
            <div
              className={`${isListOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
              id="navbar-hamburger"
            >
              <ul className="font-medium flex flex-col md:flex-row md:space-x-8 md:items-center text-center">
                <li>
                  <Link
                    to='/'
                    className="block py-2 px-3 text-white uppercase md:text-white md:p-0"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className="block py-2 px-3 text-white uppercase md:text-white md:p-0"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to='/blog'
                    className="block py-2 px-3 text-white uppercase md:text-white md:p-0"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className="block py-2 px-3 text-white uppercase md:text-white md:p-0"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* User Profile Menu for Desktop */}
            <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
              <button
                onClick={toggleMenu}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-[#3e1943] dark:focus:ring-gray-600"
                aria-expanded="false"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.picture}
                  alt="user photo"
                />
              </button>

              {isMenuOpen && (
                <div
                  className="absolute right-0 top-0 z-50 mt-20 text-base 
                  list-none bg-white divide-y divide-gray-100 
                  rounded-lg shadow dark:bg-gray-700
                   dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user ? user.name : "No name"}
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      {user ? user.email : "No mail"}
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
                      <Login>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign in
                        </a>
                      </Login>
                    </li>
                    <li>
                      <button
                        onClick={toggleSignIn}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign In with Email
                      </button>
                      {showSignIn && <SignInForm toggleSignIn={toggleSignIn} />}
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
