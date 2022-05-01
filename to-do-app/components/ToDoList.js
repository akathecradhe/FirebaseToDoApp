import { useSelector, useDispatch } from 'react-redux'

const ToDoList = () => {

  const dispatch= useDispatch()
  const toDos = useSelector((state) => state.toDo.todos)
  const handleClick = (id) => dispatch({
    type: "todos/REMOVE-TO-DO",
    payload: id,
  })


  if(!toDos || !toDos.length) {
    return <p> You To-Do List is empty</p>
  }

  return(

    <ul>
      {toDos.map(todo =>
        
        <li key={todo.id} >{todo.text} 
          <button onClick={() => handleClick(todo.id)}>remove</button>

        </li>)}
    </ul>
  )
  
}

export default ToDoList
