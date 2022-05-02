import { combineReducers } from 'redux'
import * as types from './types'

// INITIAL Todo STATE
const initialTodoState = {
  todos: [],
}

//generates ID for each item
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}


// todoREDUCER
const toDoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case 'todos/ADD-TO-DO':
      return {
        ...state,
        todos: [...state.todos, 
          {
            id: nextTodoId(state.todos),
          text: action.payload,}]
      }
    case 'todos/REMOVE-TO-DO':
      return {
        todos: [...state.todos.filter( todo => todo.id !== action.payload )]
        }                                                                
    
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  toDo: toDoReducer,
}

export default combineReducers(reducers)
