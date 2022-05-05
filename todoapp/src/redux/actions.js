import { db } from '../firebase';

//sets the initial state
const setTodosAction = (todo) => ({
    type: "todos/SET-TODOs",
    payload: todo,
});

const addAction = (todo, id) => ({
    type: "todos/ADD-TO-DO",
    payload: {text: todo, id: id},
  });

const removeAction = (todoId) => ({
    type: "todos/REMOVE-TO-DO",
    payload : {id: todoId},
  });

const updateAction = (id,todo) => ({
    type: "todos/UPDATE-TO-DO",
    payload: {text: todo, id: id},
  });
    
  
  
export const addTodo =  (todo ) =>  (dispatch) => {
    db.collection("todolist")
        .add({
          text: todo
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);  
          dispatch(addAction(todo,docRef.id));
        })
        .catch((err) => {
          //needs to be handled  
          console.log(err)
        });
    };

export const updateTodo = (todoObj, todo) => (dispatch) => {
     console.log("Document UPDATE with ID: "+ todoObj, todo);   
     db.collection("todolist")
        .doc(todoObj)   
        .update({text: todo})
        .then(() => {
            //  console.log("Document UPDATE with ID: "+ todoID, todo);  
            dispatch(updateAction(todoObj,todo));
        })
        .catch((err) => {
              //needs to be handled  
             console.log(err)
        });
        };    

export const removeTodo =  (todoObj) =>  (dispatch) => {
      
    db.collection("todolist")
        .doc(todoObj.id)
        .delete()
        .then(() => {
          dispatch(removeAction(todoObj.id));
        })
        .catch((err) => {
            //needs to be handled
            console.log(err)
        });
    };


export const getTodos = () => async (dispatch) => {
    let alltodos = [];
    try{
        const todolist = await db.collection("todolist").get();    
        todolist.forEach((todo) => {
            alltodos.push({ text: todo.data().text, id: todo.id });
         });
    }
    catch(err){

        console.log(err)
    }
    dispatch(setTodosAction(alltodos));
  };
  