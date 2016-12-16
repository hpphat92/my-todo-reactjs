import React from 'react';

class Header extends React.Component {
  render() {
    let headerStyle = {
      color: 'red',
      fontSize: '20px'
    }
    return (
      <div>
        <h4 style={headerStyle}>My Todo Application</h4>
      </div>
    );
  }
}

export default Header;