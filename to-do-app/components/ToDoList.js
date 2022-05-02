import { useSelector,shallowEqual } from 'react-redux'
import ListItem from './ListItem.js';
import React from 'react'

const ToDoList = () => {

  const toDos = useSelector((state) => state.toDo.todos)
  const toDoIds = useSelector((state) => state.toDo.todos.map(todo => todo.id),shallowEqual )


  const ListItems = toDoIds.map((todoID) => {
    return <ListItem key={todoID}  id={todoID} />
  })
  

  if(!toDos || !toDos.length) {
    return <p> You To-Do List is empty</p>
  }

  return(
    
    <ul>
      {ListItems}
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