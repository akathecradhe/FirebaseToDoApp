import { useSelector, useDispatch,shallowEqual } from 'react-redux'
import ListItem from './ListItem.js';
import React, { useState, useRef} from 'react'

const ToDoList = () => {


  const [todo, setTodo] = useState('');

  const toDos = useSelector((state) => state.toDo.todos)

  const toDoIds = useSelector((state) => state.toDo.todos.map(todo => todo.id),shallowEqual )


  const dispatch= useDispatch()
 


  const ListItems = toDoIds.map((todoID) => {
    console.log(todoID)
    return <ListItem key={todoID}  id={todoID} />
  })
  
  // const handleEdit = (id) => {

  //   console.log(id)
    
  //   dispatch({
  //   type: "todos/UPDATE-TO-DO",
  //   payload: id, todo
  // })}


  if(!toDos || !toDos.length) {
    return <p> You To-Do List is empty</p>
  }

  return(
    
    <ul>
      {ListItems}

  
      {/* {toDos.map(todo =>     
        <li key={todo.id} >
          {todo.text}
          <input
            ref={inputRef}
            disabled={inputRef}
            defaultValue={todo.text}
            onKeyPress={(e) => handleEdit(todo.id)}
          />
          <button onClick={() => changeFocus()}>Edit</button>
          <button onClick={() => handleRemove(todo.id)}>remove</button>
        </li>)} */}
    </ul>
  )
  
}

export default ToDoList

const Item = (id,text, edit) => {
  if (!edit) {
    return (
      <>
        <p>{text}</p>
        <button onClick={() => handleEdit(id)}>Edit</button>
      </>
      
    )
  } else {
    return <button>Submit</button>;
  }
}