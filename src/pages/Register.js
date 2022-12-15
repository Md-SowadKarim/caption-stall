import React from 'react'
import { useState } from 'react'
// import axios from "axios"
// import { useNavigate } from 'react-router-dom'

const Register = () => {
//   const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")


//   useEffect(()=>{
//     const token=localStorage.getItem("token")
//     axios.get("http://localhost:3300/feature",{
//       headers:{
//         Authorization:token
//       }
//     })
//     .then((res)=>{
//       navigate("/feature")
//     }).catch((err)=>{
//       navigate("/register")
//     })
//   }, [])
// const handleClick=(e)=>{
//     axios.post("http://localhost:3300/register",{username,password})
//     .then(()=>{
//       console.log("user is registered");
//       navigate("/login")
//   }).catch((error)=>{
//     console.log(error)
//     navigate("/register")
//   })
// e.preventDefault()
// console.log(username)
// console.log(password)
//    }


  return (
    <div>
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-blue-600">
                            Sing Up
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    
                        
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                   type="text" placeholder='Email' value={username} onChange={
                                    (e)=>{setUsername(e.target.value)}} required 
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
                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                href="/login"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                           
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Register
