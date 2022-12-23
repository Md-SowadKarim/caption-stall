import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Register = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   
    const { signUp, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          await signUp(email, password);
          navigate("/");
        } catch (err) {
          console.log(err.message);
        }
      };

      const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };


    return (
      <div>
      <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
              <div>
                  <a href="/">
                      <h3 className="text-4xl font-bold text-blue-600">
                          Sign Up
                      </h3>
                  </a>
              </div>
              <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                  
                      
              <form onSubmit={handleSubmit}>
            
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Email
                </label>
                <div className="flex flex-col items-start">
                    <input
                       type="text" placeholder='Email' value={email} onChange={
                        (e)=>{setEmail(e.target.value)}} required 
                        className="block w-full mt-1 border border-purple-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Password
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="password" placeholder='Password' value={password} onChange={
                            (e)=>{setPassword(e.target.value)}} required 
                        className="block w-full mt-1 border border-purple-600  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
            </div>
            <div className='space-y-2'>
                <div>
                    <button
                    
                        type='submit'
                        className='w-full px-8 py-3 font-semibold rounded-md bg-deep-purple-accent-400 bg-black mt-2  hover:bg-gray-700 hover:text-white text-gray-100'
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            </form>  
                   
                      <div className='flex items-center pt-4 space-x-1'>
                      <div className='flex-1 h-px sm:w-16 dark:bg-deep-purple-accent-400'></div>
                      <p className='px-3 text-sm dark:text-deep-purple-accent-400'>
                          Sign Up with social accounts
                      </p>
                      <div className='flex-1 h-px sm:w-16 dark:bg-deep-purple-accent-400'></div>
                  </div>
              <div className='flex justify-center space-x-4'>
                      <button
                          onClick={handleGoogleSignIn}
                          aria-label='Log in with Google'
                          className='p-3 rounded-sm'
                      >
                          <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 32 32'
                              className='w-5 h-5 fill-current'
                          >
                              <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                          </svg>
                      </button>
                     
                  </div>
                 
                 
              </div>
              
            
          </div>
      </div>
  
  </div>
    )
}

export default Register
