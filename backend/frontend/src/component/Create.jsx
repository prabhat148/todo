import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate}from 'react-router-dom'
const Create = () => {
 
 const [title,setTitle] = useState()
 const [description,setDiscription] = useState()
 const [category,setCategory] = useState()

const baseUri = window.location.origin

     const history = useNavigate();
    const handelClick=()=>{
        history("/") 
    }
    const handelSave = ()=>{
        axios.post(`${baseUri}/task/add`,{title,description,category})
        .then(()=>{
            console.log("post created successfully")
            history('/')
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

  return (
    <div className='h-[100vh]  bg-slate-200 flex justify-center p-1 items-center w-[100%]'>
       <div className="h-[80%] bg-slate-400 w-[50%] rounded-lg p-2 flex flex-col justify-around shadow-lg ">
            <label className='m-2'>Title :
             <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}  className='m-4 outline-none  w-[80%] p-3' placeholder='enter title'/>
            </label>
            <label className='m-2'>description :
             <input type="text" onChange={(e)=>setDiscription(e.target.value)} value={description} className='m-4 outline-none  w-[80%] p-3' placeholder='enter title'/>
            </label>
            <label className='m-2'>category :
             <input type="text" onChange={(e)=>setCategory(e.target.value)} value={category} className='m-4 outline-none w-[80%] p-3' placeholder='enter title'/>
            </label>
           
            <div className=' w-[70] flex justify-evenly'>
        <button className=' h-16 w-17 bg-green-400  p-4 text-center rounded-lg my-1' onClick={handelSave}>Add</button>
        <button className='h-16 w-17 text-center p-4 rounded-lg bg-red-400 my-1' onClick={handelClick} >Home</button>
       </div>
       </div>
      
    </div>
  )
}

export default Create
 