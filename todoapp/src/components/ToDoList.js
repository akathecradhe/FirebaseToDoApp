import { shallowEqual, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import ListItem from './ListItem.js';
import { getTodos } from "../redux/actions.js";

const ToDoList = () => {
  const toDoIds = useSelector((state) => state.toDo.todos.map(todo => todo.id),shallowEqual )
  
  const ListItems = toDoIds.map((todoID) => {
    return <ListItem key={todoID}  id={todoID} />
  })

  const dispatch = useDispatch();
  useEffect(() => {
  
      dispatch(getTodos());
    
  }, [dispatch]);
  
  if(!toDoIds || !toDoIds.length) {
    return <p className="mt-5"> You To-Do List is empty</p>
  }

  return(   
    <ul>
      {ListItems}
    </ul>
  )
  
}

export default ToDoList

