import React from 'react';
import {connect} from 'react-redux'
import TodoInput from './TodoInput.jsx';
import Todo from './Todo.jsx';
class Body extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
  }

  render() {
    return (
      <a href="/todo">Todo App</a>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listTodoes: state.gTodoesList
  }
};

// Create new component
export default connect(mapStateToProps, null)(Body);