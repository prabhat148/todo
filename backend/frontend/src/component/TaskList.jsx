import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const nav =useNavigate()

  const [tasks, setTasks] = useState([]);
const [isChange ,setChange] =useState(false)
  useEffect(() => {
    fetchTasks();
    console.log(tasks)
    setChange(false)
  }, [isChange]);
    
    const baseUri = window.location.origin
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${baseUri}/task`);
      console.log(response)
     const ShortedData = await response.data.sort((a, b) =>{
        const priorityOrder ={High:1,Medium:2,Low:3}
        return priorityOrder[a.priority] - priorityOrder[b.priority]
     })
      
      setTasks(ShortedData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handlePriorityChange = async (taskId, priority) => {
    try {
      await axios.put(`${baseUri}/task/${taskId}/priority`, { priority });
      setChange(true)
      fetchTasks();
    } catch (error) {
      console.error('Error updating task priority:', error);
    }
  };

//   const handleCategoryChange = async (taskId, category) => {
//     try {
//       await axios.put(`http://localhost:3000/tasks/${taskId}/category`, { category });
//       fetchTasks();
//     } catch (error) {
//       console.error('Error updating task category:', error);
//     }
//   };

const handelDelete = async(id)=>{
     try {
         await axios.delete(`${baseUri}/task/${id}`)
         fetchTasks()
         setChange(true);
     } catch (err) {
         console.log(err.message)
     }
}

const  handeEdit =(id)=>{
    nav(`/update/${id}`)
}


const handelNav =()=>{
        nav("/create")
}
  return (
    <div className='w-[100%] h-full p-4 text-center flex flex-col items-center bg-slate-300'>
        <h1 className="text-2xl font-bold ">
       Todos
        </h1>

        {tasks.map(task=> ( 
            <div key={task._id} className=' bg-slate-400 flex my-2 p-3 rounded-lg shadow-xl w-[90%] h-[40%] md:w-[70%] md:h-[35%] justify-start'>
                
                <div className=' flex flex-1 mx-5 flex-col justify-between items-start p-3'>
                    <h2 className='  text-2xl'>{task.title}</h2>
                    <p>{task.description}</p>
                    <p>{task.category}</p>
                    <p>{task.priority}</p>
                </div>
                <div className='flex flex-col  justify-evenly'>
                         <label>set priiorty :</label>
                <select className=" h-8 outline-none "  onChange={(e)=> handlePriorityChange(task._id,e.target.value)}>
                    <option value={'High'}>High</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'Low'}>Low</option>
                </select>

                <button className="  bg-green-400 h-8 text-center rounded-lg my-1" onClick={()=>handeEdit(task._id)} >edit</button>
                <button className=" h-8 text-center rounded-lg bg-red-400 my-1" onClick={()=>handelDelete(task._id)}>delete</button>
                </div>
               
                
        </div>    
        
         ))}
               <button className=" h-16 text-center p-4  rounded-full bg-red-400 my-1 align-bottom absolute" onClick={handelNav}>Add Task </button>
    </div>
  );
};

export default TaskList;
