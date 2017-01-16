import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>Hello {this.props.to}</div>
    )
  }
}
export default Hello;