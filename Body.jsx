import React from 'react';
import TodoInput from './TodoInput.jsx';
import Todo from './Todo.jsx';
class Body extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
    this.state = {
      listTodoes: []
    };
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  generateRandomId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4();
  }

  addNewTodo(newTodoContent) {
    let listTodo = this.state.listTodoes;
    listTodo.push({
      content: newTodoContent,
      createdDate: new Date(),
      id: this.generateRandomId()
    });
    this.setState({listTodoes: listTodo});
  }

  updateTodo(todoId, content) {
    let listTodo = this.state.listTodoes;
    let indexMatching = listTodo.findIndex(t => t.id === todoId);
    if (indexMatching >= 0) {
      listTodo[indexMatching].content = content;
      listTodo[indexMatching].updatedDate = new Date();
      this.setState({listTodoes: listTodo});
    }
  }

  removeTodo(todoId) {
    let listTodo = this.state.listTodoes;
    let indexMatching = listTodo.findIndex(t => t.id === todoId);
    if (indexMatching >= 0) {
      listTodo.splice(indexMatching, 1);
      this.setState({listTodoes: listTodo});
    }
  }

  render() {
    let listTodoHtml = (
      this.state.listTodoes.map((todo, index) => <Todo onRemove={this.removeTodo.bind(this, todo.id)}
                                                       onSave={this.updateTodo.bind(this)} key={todo.id}
                                                       content={todo} index={index + 1}/>)
    );
    return (
      <div>
        <div>Add new Todo</div>
        <TodoInput onSave={this.addNewTodo}/>
        <div>List Todo ({this.state.listTodoes.length})</div>
        {listTodoHtml}
      </div>
    );
  }
}

export default Body;