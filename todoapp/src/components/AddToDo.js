
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
    <>
        <input  value={todo} placeholder="Add Task" type="text"  onChange={e => setTodo(e.target.value)} />
        <button
        className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' 
        disabled={!todo} onClick={clickHandler}>Add</button>
    </>
  )
}

export default AddToDo;