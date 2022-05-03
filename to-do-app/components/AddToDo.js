
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
const AddToDo = () => {

  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  
  const clickHandler = () => { dispatch({
    type:   'todos/ADD-TO-DO',
    payload: todo
  })
  setTodo('')
}
  return (
    <>
        <input value={todo} placeholder="Add Task" type="text"  onChange={e => setTodo(e.target.value)} />
        <button onClick={clickHandler}>Add</button>
    </>
  )
}

export default AddToDo;