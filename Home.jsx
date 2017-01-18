import React from 'react';
import {connect} from 'react-redux'
import TodoInput from './TodoInput.jsx';
import Todo from './Todo.jsx';
import Dropdown from './Dropdown.jsx';
class Home extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
  }

  render() {
    return (
      <div className="menu">

        <Dropdown list={['test1', 'test2']}/>

        {/*<a href="/todo">Todo App</a>*/}
        {/*<a href="/shouldcomponentupdate">Should Component Update Demo</a>*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listTodoes: state.gTodoesList
  }
};

// Create new component
export default connect(mapStateToProps, null)(Home);