import React, { useState } from 'react'
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

import img from "../asset/download.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/login");
      } catch (error) {
        console.log(error.message);
      }
    };

    
  
  return (
        
       
          <div class="bg-gray-900 sticky top-0 z-30 w-full px-2 py-1  sm:px-4 shadow-xl">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div class="relative flex items-center justify-between">
                <div class="flex items-center">
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center mr-8"
                  >
                    <img src='../logo192.png' className="w-6" alt='img'/>
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                      Caption_stall
                    </span>
                  </a>
                  <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide active:text-purple-500  text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Features 
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blogs"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/content"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Content
                      </a>
                    </li>
                    <li>
                      <a
                        href="/review"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Feedback
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        About us
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                  {user?
                  <ul className="flex items-center hidden space-x-8 lg:flex">
                     <li>
                 <img
                                aria-label={user?.displayName}
                                title={user?.displayName}
                                className='w-10 h-10 ml-10 rounded-full'
                                src={user?.photoURL || img}>
                            </img>
                            <a
                   href="/login"
                   aria-label="Sign in"
                   title="Sign in"
                   className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                 >
                   {user.displayName || user.email}
                 </a>
               </li>
               <li>
               <a
               onClick={handleLogout}
                  href="/login"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Logout
                </a>
               </li>
                  </ul>
                  :
               <ul className="flex items-center hidden space-x-8 lg:flex" >
                
               
                <li>
                <a
                  href="/login"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign In
                </a>
              </li>
               <li>
               <a
                 href="/register"
                 className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                 aria-label="Sign up"
                 title="Sign up"
               >
                 Sign up
               </a>
             </li>
             </ul>
                }
                 
                 
                </ul>
                <div className="lg:hidden">
                  <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    className="p-2 -mr-1 transition duration-200 rounded  focus:shadow-outline"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                      />
                      <path
                        fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                      />
                      <path
                        fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                      />
                    </svg>
                  </button>
                  {isMenuOpen && (
                    <div className="absolute z-50 top-0 left-0 w-full">
                      <div className="p-5 bg-white border rounded shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <a
                              href="/"
                              aria-label="Company"
                              title="Company"
                              className="inline-flex items-center"
                            >
                             <img src='../logo192.png' className="w-6" alt='img'/>
                              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                Caption Stall
                              </span>
                            </a>
                          </div>
                          <div>
                            <button
                              aria-label="Close Menu"
                              title="Close Menu"
                              className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <nav>
                          <ul className="space-y-4">
                          <li>
                              <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Home
                              </a>
                            </li>
                            <li>
                              <a
                                href="/feature"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Features
                              </a>
                            </li>
                            <li>
                              <a
                                href="/blog"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Blogs
                              </a>
                            </li>
                            <li>
                              <a
                                href="/content"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Content 
                              </a>
                            </li>
                            <li>
                              <a
                                href="/about"
                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                About us
                              </a>
                            </li>
                            <li>
                              <a
                                href="/review"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                feedback
                              </a>
                            </li>





                            {user?
                  <li>
                  <a
                  onClick={handleLogout}
                    href="/login"
                    aria-label="Sign in"
                    title="Sign in"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Log Out
                  </a>
                  </li>
                  :
               
                <ul>
             
               <li>
                              <a
                                href="/login"
                                aria-label="Sign in"
                                title="Sign in"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Sign in
                              </a>
                            </li>
                            <li>
                              <a
                                href="/register"
                                aria-label="Sign up"
                                title="Sign up"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Sign up
                              </a>
                            </li>
                       </ul>    
            
                }









                            
                          </ul>
                        </nav>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      };
 


export default Header
