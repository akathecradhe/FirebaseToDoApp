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


//Functions to update from Docs https://redux.js.org/usage/structuring-reducers/refactoring-reducer-example
function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues)
}

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) {
      // update one item, preserve all others as they are now
      return item
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item)
    return updatedItem
  })

  return updatedItems
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
    
    case 'todos/UPDATE-TO-DO': {
      const newTodos = updateItemInArray(state.todos, action.id, todo => {
        return updateObject(todo, { text: action.text })
      })
      return updateObject(state, { todos: newTodos })
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
