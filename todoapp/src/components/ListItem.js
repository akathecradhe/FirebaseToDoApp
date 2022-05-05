
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react' ;
import { removeTodo,updateTodo } from '../redux/actions';

const selectTodoById = (state, todoId) => {
    const listOfTodos = state.toDo.todos 
    return listOfTodos.find(todo => todo.id === todoId)
  }

const ListItem = ({ id }) => {
  const [todotext, setTodoText] = useState(''); 
  const todo = useSelector(state => selectTodoById(state, id))
  const [edit, setEdit] = useState(false)
  const {text} = todo;
  
  const dispatch= useDispatch()

  const handleRemove = () => {
    dispatch(removeTodo(todo))
  }

  
const handleEdit = () => {
    dispatch(updateTodo(todo.id,todotext))
  setEdit(false)
}
  return (
    <li>
      <div >
        <div >
          
          <div ></div>
        </div>

          {edit ? (<>
                     <input className='shadow appearance-none border-black rounded w-96 py-2 px-3 text-gray-700'
                      value={todotext} placeholder={text} type="text"  onChange={e => setTodoText(e.target.value)} />
                     <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                     onClick={handleEdit} >Submit</button>  
                   </>
                )
            : 
                (<>
                    {text}
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                     onClick={() =>{ setTodoText(text); setEdit(true)}}> Edit</button>
                </>  
                    
                    
                ) }  

          
          
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleRemove} >
            delete
          </button>

        
        
      </div>
    </li>
  )
}

export default ListItem;
