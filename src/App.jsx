import React from 'react'
import { useState } from 'react';
import { useFormState } from 'react-dom';



const App = () => {
const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])

const submitHandler=(e)=>{
  e.preventDefault();

  const copyTask=[...task];
  copyTask.push({title,details})
  setTask(copyTask);
  //setTask(JSON.stringify(copyTask));
 // console.log("hi"+JSON.stringify(copyTask));
  //console.log("hello"+task);
//console.log("1"+title);
setTitle('')
//console.log("2"+details)
setDetails('')

}



const deleteNote=(idx)=>{
const copyTask=[...task]
console.log("delete function"+copyTask[idx]);
copyTask.splice(idx,1)
setTask(copyTask);
}



  return (
    <div className='h-screen lg:flex
     bg-black
     text-white '>
     
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
       className='flex flex-col lg:w-1/2
      items-start 
      items-start gap-4 
      p-10'>

         <h1 className='text-3xl font-bold'>Add Notes</h1>
   
        <input type="text"   placeholder='Enter Notes heading'className='px-5 py-2 w-full outline-none font-medium border-2 rounded
        'value={title}
        onChange={(e)=>{
         // console.log(e)
         // console.log(e.target.value)
          setTitle(e.target.value);
        }}/>

        <textarea name="details" id="details"
        placeholder='Enter details'className='px-5 py-2 w-full border-2 h-32 flex-raw font-medium items-start
        outline-none rounded'
        value={details}
        onChange={(e)=>{
         // console.log(e)
         // console.log(e.target.value)
          setDetails(e.target.value);
        }}/>
        
      
     
        <button className='border-2 rounded  px-5 py-2 w-full
         bg-white font-medium outline-none text-black
         active:text-white'>
          Add Notes
        </button>
      </form>


<div className='lg:w/2 lg:border-l-2 p-10'>
  <h1 className='text-4xl font-bold'>Recent Notes</h1>
  <div className='flex overflow-auto
   bg-gray-900 gap-5 mt-5 h-[90%] 
   items-start justify-start flex-wrap'>

      {
      task.map(function(elem,idx)
      {
      
        return (



      <div key={idx} className="flex 
      justify-between flex-col
      items-start
      relative h-52 w-40 rounded-xl bg-cover
       text-black py-8 px-3
       bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9NUjpC38URFxB315lE7pm4uaD37MwzKkEw&s')]">

  


        <h3 className='leading-tight text-xl font-bold'>
          {elem.title}
        </h3>
        <p className='mt-2 font-medium
        leading-tight
        text-gray-700'>
          {elem.details}
        </p>

        <button className='w-full rounded-full py-1 text-xs
        bg-red-400 text-white
        cursor-pointer 
        active:scale-95' 
        onClick={()=>{
          deleteNote(idx)
        }}
        
        >Delete </button>
        </div>)
    })}



  </div>
</div>
    </div>
  )
}

export default App