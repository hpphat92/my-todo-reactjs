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

// This is where we define global state tree
// Example we have property gTodoesList in global tree
// Each time some where dispatch an action, all reducer in each property is re computed and to produce the next state of current property after action is performed.
// Each reducer is a function that accepted 2 parameters: Current state (undefined if initiaze) an the action dispatched. (action object is defined at the Actions.js file).
// We have to return the next state of the current state property after the action is performed.

// TODO: Research why we can't use ... (triple dot) operator (ES6).
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