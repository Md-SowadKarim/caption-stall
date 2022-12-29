import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"

import {db} from "../firebase"

import{
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore"

const Review = () => {
    const  feedbackCollectionRef=collection(db,"feedbacks")

 


    const [name,setName]=useState("")
    const [rating,setRating]=useState(0)
    const [service,setService]=useState("")
    const [msg,setMsg]=useState("")
    const [users, setUsers] = useState([]);
  
  
  
    const createUser=async()=>{
      await addDoc(feedbackCollectionRef,{name: name, rating:Number(rating), service: service, message:msg })
    }
  
    const updateUser=async(id,msg,rating,service)=>{
      const userDoc=doc(db,"feedbacks",id)
      const newFields={name: name, rating:Number(rating), service: service, message:msg }
      await updateDoc(userDoc,newFields)
    }
  
    const deleteUser=async(id)=>{
      const userDoc=doc(db,"feedbacks",id)
      await deleteDoc(userDoc)
    }
  
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(feedbackCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  
        
        
      };
  
      getUsers();
      
    }, []);
  
  
    return (
      <div>
   
   <div class="grid grid-cols-4 gap-4">








      
{users.map((user) => {
  return (
    <div  className='bg-cyan-600 relative m-5 text-left'>
     <div className=' p-5'>
      <h1>Name: {user.name}</h1>
      <h1>Rating: {user.rating}</h1>
      <h1>Service Type: {user.service}</h1>
      <h1>Opinion: {user.message}</h1>
     </div>
      <button  onClick={() => {
          deleteUser(user.id);
        }} type="button" class="  px-6 py-2.5 m-2 bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">delete</button>

<button  onClick={() => {
          updateUser(user.id, user.name,user.rating,user.service,user.message);
        }} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 right-0 absolute m-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
    </div>
  );
})}




</div>
  
  
  
  
  
      <div className="flex flex-col w-1/4 mx-auto max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-slate-400 mb-5">
      <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
          <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                  <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500" data-darkreader-inline-fill="">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                  </button>
                  <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500" data-darkreader-inline-fill="">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                  </button>
                  
                  <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500" data-darkreader-inline-fill="">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                  </button>
                  <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600" data-darkreader-inline-fill="">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                  </button>
              </div>
          </div>
          
              <div class="mb-6">
                  <input type="text" onChange={(event) => {
         setName(event.target.value);
          }} name="service_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name " required />
              </div>
              <div class="mb-6">
                  <input type="text" onChange={(event) => {
         setService(event.target.value);
          }} name="review_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Service " required />
              </div>
              
              <div class="mb-6">
                  <input type="text" onChange={(event) => {
         setRating(event.target.value);
          }} name="star" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Star (1-5)" required />
              </div>
              <textarea onChange={(event) => {
         setMsg(event.target.value);
          }} name="message" rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-700 bg-gray-50"></textarea>
              <button onClick={createUser}  type="submit" className="py-4 my-8 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 text-white">Leave feedback</button>
        
      </div>
      <div className="flex items-center justify-center">
          <Link rel="noopener noreferrer" to='/' className="text-sm font-semibold hover:text-white">Maybe later</Link>
      </div>
  </div>
      </div>
    )
}

export default Review
