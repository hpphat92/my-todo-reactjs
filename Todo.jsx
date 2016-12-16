import React from 'react';
import TodoInput from './TodoInput.jsx';
class Todo extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
    this.state = {
      isEditting: false
    };
    this.editTodo = this.updateStateEditting.bind(this, true);
    // this.removeTodo = this.removeTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.cancelEdit = this.updateStateEditting.bind(this, false);
  }

  updateStateEditting(isEditting) {
    this.setState({isEditting: isEditting});
  }

  saveTodo(newContent) {
    this.props.onSave && this.props.onSave.call(this, this.props.content.id, newContent);
    this.cancelEdit();
  }
  removeTodo(){
    this.props.onRemove && this.props.onRemove();
  }
  render() {
    if (!this.state.isEditting) {
      return (
        <div>
          <b>{this.props.index}</b> -
          {this.props.content.content} -
          <em>{this.props.content.createdDate.toDateString()}</em> -
          <em>{this.props.content.updatedDate && this.props.content.updatedDate.toDateString()}</em>
          <span>
              [<a href="javascript:void(0)" onClick={this.editTodo}>Edit</a>] [<a href="javascript:void(0)"
                                                                                  onClick={this.removeTodo}>Remove</a>]
        </span>
        </div>
      );
    } else {
      return (
        <div>
          <TodoInput content={this.props.content.content} onSave={this.saveTodo} onRemove={this.cancelEdit}></TodoInput>
        </div>
      )
    }
  }
}

export default Todo;