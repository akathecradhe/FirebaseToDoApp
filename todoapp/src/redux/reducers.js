import { combineReducers } from 'redux'

// INITIAL Todo STATE
const initialTodoState = {
  todos: [],
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
    case 'todos/SET-TODOs':
      state = { ...state, todos: action.payload };
      return state;  
    case 'todos/ADD-TO-DO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'todos/REMOVE-TO-DO':
      return {
        todos: [...state.todos.filter( todo => todo.id !== action.payload.id )]
        }       
    
    case 'todos/UPDATE-TO-DO': {
      const newTodos = updateItemInArray(state.todos, action.payload.id, todo => {
        return updateObject(todo, { text: action.payload.text })
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
