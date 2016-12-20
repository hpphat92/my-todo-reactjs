import React from 'react';
import {connect} from 'react-redux'
import TodoInput from './TodoInput.jsx';
import {addTodo, editTodo, toggleTodo, removeTodo, toggleTodoEditting} from './Actions';

class Todo extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
    // this.removeTodo = this.removeTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  saveTodo(newContent) {
    this.props.onSave && this.props.onSave.call(this, this.props.todo.id, newContent);
  }

  removeTodo() {
    this.props.onRemove && this.props.onRemove(this.props.todo.id);
  }

  render() {
    let className = 'todo-container';
    if (this.props.todo.completed) {
      className += " completed";
    }
    if (!this.props.todo._editting) {
      return (
        <div className={className}>
          <div className="todo-content">
            <div className="content" style={{cursor: 'pointer'}}
                 onClick={this.props.toggleTodo.bind(this, this.props.todo.id)}>
              {this.props.todo.content}
            </div>
            <div className="created-date small">
              <em>{this.props.todo.createdDate.toDateString()}</em> -
              <em>{this.props.todo.updatedDate && this.props.todo.updatedDate.toDateString()}</em>
            </div>
          </div>
          <div className="btn-action">
            <button className="btn btn-xs btn-primary"
                    onClick={this.props.onToggleEditting.bind(this, this.props.todo.id)}>Edit
            </button>
            <button className="btn btn-xs btn-default" onClick={this.removeTodo}>Remove</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <TodoInput todo={this.props.todo}/>
        </div>
      )
    }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemove: (id) => {
      dispatch(removeTodo(id));
    },
    onToggleEditting: (id) => {
      dispatch(toggleTodoEditting(id));
    }
  }
};

/**
 * Function to map state of global store and passing properties of this components to current props
 * @Input: state: Current state of store
 * @Input: ownProps: Current Props that user pass into this component
 * @Output: {Object} Define new Props of this Component
 * @returns {{todo: *}}
 */
const mapStateToProps = (state, ownProps) => {
  return {
    todo: ownProps.todo
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);