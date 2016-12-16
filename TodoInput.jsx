import React from 'react';

class Body extends React.Component {
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
      content: this.props.content || ''
    })
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

  onCancelTodo() {
    this.props.onRemove && this.props.onRemove();
    this.setState({
      content: ''
    })
  }

  render() {
    let cancelButton = this.props.onRemove ? (
        <button onClick={this.onCancelTodo}>Cancel</button>
      ) : (null);
    return (
      <div>
        <input type="text" value={this.state.content} onChange={this.updateState}/>
        <button onClick={this.addTodo} disabled={!this.state.content}>Save</button>
        {cancelButton}
      </div>
    );
  }
}

export default Body;