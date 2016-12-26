import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

import {addTodo, editTodo, toggleTodoEditting} from './Actions';

class TodoInput extends React.Component {
  constructor(props) {
    super(props); //Call this function because 'this' is not allowed before super().
    this.state = {
      content: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.onCancelTodo = this.onCancelTodo.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    this.setState({
      content: this.props.todo.content || ''
    })
  }

  updateState(e) {
    this.setState({content: e.target.value});
  }

  addTodo() {
    // We of course not declare onSave function of this component at parent component
    // Refer to: Body.jsx for more information
    // We declare this onSave at mapDispatchToProps function
    this.props.onSave.call(this, this.state.content, this.props.todo && this.props.todo.id || null);
    this.setState({
      content: ''
    })
  }

  onCancelTodo() {
    this.props.onCancelEditting(this.props.todo && this.props.todo.id);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input className="form-control" type="text" value={this.state.content} onChange={this.updateState}/>
          <button className="btn btn-primary" onClick={this.addTodo} disabled={!this.state.content}>Save</button>
          {this.props.todo.id ?
            <button className="btn btn-default" onClick={this.onCancelTodo.bind(this)}>Cancel</button> : null}
        </div>
      </div>
    );
  }
}

// Tips: mapDispatchToProps is where you declare function to dispatch to redux to update global tree state
// We of course declare other function here. but it is meanless.

// We can use either first and second one declaration for mapDispatchToProps (I think the first one is better)
// 1: Don't need to call dispatch.. just return the action object.
const mapDispatchToProps = ({
  onSave: (content, id) => {
    if (id) {
      return editTodo(id, content);
    } else {
      return addTodo(content);
    }
  },
  onCancelEditting: (id) => {
    return toggleTodoEditting(id);
  }
});
// 2: Call dispatch. Don't need to return object.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSave: (content, id) => {
//       if (id) {
//         dispatch(editTodo(id, content));
//       } else {
//         dispatch(addTodo(content));
//       }
//     },
//     onCancelEditting: (id) => {
//       dispatch(toggleTodoEditting(id));
//     }
//   }
// };


// For mapping state of global tree (of redux) into current component.
const mapStateToProps = (state, ownProps) => {
  return {
    todo: ownProps.todo || {}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);