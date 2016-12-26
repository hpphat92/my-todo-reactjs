// This is place we put things for action declaration here

// This constant is for action name (type).
// Each action should have type to recognize which action is dispatched.
// We export these const so that in reducer we can reuse them.
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_TODO_EDITTING = "TOGGLE_TODO_EDITTING";
export const REMOVE_TODO = "REMOVE_TODO";

// This function is to produce an action object. it works like a message we sent via internet. Reducers will receive message like this format and will process them.

// Tips: you can put anything into this object. we atleast need a same name property (type) to define the action type.
export const addTodo = (todoContent) => {
  return {
    type: ADD_TODO,
    text: todoContent,
    completed: false
  }
};

export const editTodo = (todoId, todoContent) => {
  return {
    type: EDIT_TODO,
    text: todoContent,
    todoId: todoId
  }
};
export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    todoId: todoId
  }
};
export const removeTodo = (todoId)=>{
  return {
    type: REMOVE_TODO,
    todoId: todoId
  }
};
export const toggleTodoEditting = (todoId)=>{
  return {
    type: TOGGLE_TODO_EDITTING,
    todoId: todoId
  }
};