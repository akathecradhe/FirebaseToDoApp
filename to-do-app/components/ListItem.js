import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const selectTodoById = (state, todoId) => {
    const listOfTodos = state.toDo.todos 
    console.log(listOfTodos.find(x => x.id === todoId))

    return listOfTodos.find(todo => todo.id === todoId)
  }

const ListItem = ({ id }) => {
 
  const todo = useSelector(state => selectTodoById(state, id))
  const {text} = todo;
  
  const dispatch= useDispatch()

  const handleRemove = () => { 
    dispatch({
    type: "todos/REMOVE-TO-DO",
    payload: id,
  })}

  return (
    <li>
      <div >
        <div >
          
          <div ></div>
        </div>
          {text}
          <button onClick >
            edit
          </button>
          <button onClick={handleRemove} >
            delete
          </button>

        
        
      </div>
    </li>
  )
}

export default ListItem;
