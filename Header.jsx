import React from 'react';

class Header extends React.Component {
  render() {
    let headerStyle = {
      color: 'red',
      fontSize: '20px'
    }
    return (
      <div className="label">
        <h4 className="class-1" style={headerStyle}>My Todo Application</h4>
      </div>
    );
  }
}

export default Header;