import React from 'react';
class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div><b>{this.props.index}</b> {this.props.content.content} <em>{this.props.content.createdDate.toString()}</em></div>
    );
  }
}

export default Todo;