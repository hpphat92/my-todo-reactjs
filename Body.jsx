import React from 'react';
import {connect} from 'react-redux'
import TodoInput from './TodoInput.jsx';
import Todo from './Todo.jsx';
class Body extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
  }

  render() {
    let listTodoHtml = (
      this.props.listTodoes.map((todo, index) => <div key={todo.id} className="col-md-3"><Todo
        todo={todo} index={index + 1}/></div>)
    );
    return (
      <div>
        <div>Add new Todo</div>
        <TodoInput/>
        <div>List Todo ({this.props.listTodoes.length})</div>
        <div className="container-fluid">
          {listTodoHtml}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTodoes: state.gTodoesList
  }
};

// Create new component
export default connect(mapStateToProps, null)(Body);