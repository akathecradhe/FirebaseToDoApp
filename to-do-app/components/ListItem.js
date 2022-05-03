
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react' ;

const selectTodoById = (state, todoId) => {
    const listOfTodos = state.toDo.todos 
    console.log(listOfTodos.find(x => x.id === todoId))

    return listOfTodos.find(todo => todo.id === todoId)
  }

const ListItem = ({ id }) => {
  const [todotext, setTodoText] = useState(''); 
  const todo = useSelector(state => selectTodoById(state, id))
  const [edit, setEdit] = useState(false)
  const {text} = todo;
  
  const dispatch= useDispatch()

  const handleRemove = () => { 
    dispatch({
    type: "todos/REMOVE-TO-DO",
    payload: id,
  })}

  
const handleEdit = () => {
    dispatch({
    type: "todos/UPDATE-TO-DO",
    payload: {id, text:todotext}
  })
  setEdit(false)
}
  return (
    <li>
      <div >
        <div >
          
          <div ></div>
        </div>

          {edit ? (<>
                     <input  value={todotext} placeholder={text} type="text"  onChange={e => setTodoText(e.target.value)} />
                     <button onClick={handleEdit} >Submit</button>  
                   </>
                )
            : 
                (<>
                    {text}
                    <button onClick={() =>{ setTodoText(text); setEdit(true)}}> Edit</button>
                </>  
                    
                    
                ) }  

          
          
          <button onClick={handleRemove} >
            delete
          </button>

        
        
      </div>
    </li>
  )
}

export default ListItem;
