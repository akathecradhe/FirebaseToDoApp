
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions';

const AddToDo = () => {
  
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  
  const clickHandler = () => {
    dispatch(addTodo(todo))
    setTodo('')
}
  return (
    <div className='bg-white p-5 max-w-lg mx-auto rounded-md '>
        <input className='border-2 rounded-lg w-full h-12 px-4'  value={todo} placeholder="Task Title" type="text"  onChange={e => setTodo(e.target.value)} />
        <button
        className=' mt-4 bg-purple-500 text-white rounded-md hover:bg-purple-800 font-semibold px-4 py-3 w-full' 
        disabled={!todo} onClick={clickHandler}>Add</button>
    </div>
  )
}

export default AddToDo;