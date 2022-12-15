
import Ftr from '../components/Ftr'
//import axios from 'axios'
import React from 'react'
//import { useNavigate } from 'react-router-dom'

const Features = () => {
  
  // const navigate=useNavigate()
  // useEffect(()=>{
  //   const token=localStorage.getItem("token")
  //   console.log(token);
  //   axios.get("http://localhost:3300/feature",{
  //     headers:{
  //       Authorization:token
  //     }
  //   })
  //   .then((res)=>{
  //     console.log(res)
  //   }).catch((err)=>{
  //     navigate("/login")
  //   })
  // }, [])
  return (
    <div>
     <Ftr/>
    </div>
  )
}

export default Features
