import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({content: e.target.value});
  }

  addTodo() {
    this.props.onSave.call(this, this.state.content);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.content} onChange={this.updateState}/>
        <button onClick={this.addTodo}>Save</button>
      </div>
    );
  }
}

export default Body;