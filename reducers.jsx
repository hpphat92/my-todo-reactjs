import {combineReducers} from 'redux'
import {EDIT_TODO, ADD_TODO, TOGGLE_TODO, REMOVE_TODO, TOGGLE_TODO_EDITTING} from './Actions';
let initialState = [];
function generateRandomId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4();
}
export default combineReducers({
  gTodoesList: (state = initialState, action) => {
    if (!action) {
      return state;
    }
    switch (action.type) {
      case ADD_TODO:
        return [].concat(state, [{
          createdDate: new Date(),
          content: action.text,
          id: generateRandomId()
        }]);
      case EDIT_TODO:
        return state.map(todo => {
          if (todo.id !== action.todoId) {
            return todo
          }
          return Object.assign({}, todo, {
            content: action.text,
            _editting: false,
            updatedDate: new Date()
          })
        });
        return state;
      case TOGGLE_TODO:
        return state.map(todo => {
          if (todo.id !== action.todoId) {
            return todo
          }
          return Object.assign({},
            todo, {completed: !todo.completed})
        });
      case REMOVE_TODO:
        return state.filter((todo) => {
          return todo.id !== action.todoId;
        });
      case TOGGLE_TODO_EDITTING:
        return state.map(todo => {
          if (todo.id !== action.todoId) {
            return todo
          }
          return Object.assign({},
            todo, {_editting: !todo._editting});
        });
      default:
        return state;
    }
  },
})