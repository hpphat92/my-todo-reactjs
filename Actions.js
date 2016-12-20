export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_TODO_EDITTING = "TOGGLE_TODO_EDITTING";
export const REMOVE_TODO = "REMOVE_TODO";
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