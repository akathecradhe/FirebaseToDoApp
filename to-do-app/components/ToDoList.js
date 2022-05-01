import { useSelector, useDispatch } from 'react-redux'

const ToDoList = () => {
  const toDos = useSelector((state) => state.toDo.todos)
  console.log("this is" + JSON.stringify(toDos));
  if(!toDos || !toDos.length) {
    return <p> You To-Do List is empty</p>
  }

  return(

    <ul>
      {toDos.map(todo => <li key={todo.id} >{todo.text}</li>)}
    </ul>
  )
  
}

export default ToDoList
