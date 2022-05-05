import { FiEdit,FiTrash2,FiCheck} from "react-icons/fi";
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
      <div className='  mt-5 bg-white p-5 max-w-lg mx-auto rounded-md ' >
        <div className='flex'>
          {edit ? (<div className='flex '>
                     <input className='border-2 mr-2 rounded-lg w-full h-12 px-4'
                      value={todotext} placeholder={text} type="text"  onChange={e => setTodoText(e.target.value)} />
                     <button className=' justify-end mr-3 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded'
                     onClick={handleEdit} ><FiCheck/></button>  
                   </div>
                )
            : 
                (<div className=' ' >
                      {text}
                   
                      <button className=' justify-end ml-4 mr-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
                      onClick={() =>{ setTodoText(text); setEdit(true)}}> <FiEdit/></button>
                    
                    
                </div>  
                    
                ) }  

          <button className=' bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded'
          onClick={handleRemove} >
            <FiTrash2/>
          </button>
      </div>

      </div>
    </li>
  )
}

export default ListItem;
