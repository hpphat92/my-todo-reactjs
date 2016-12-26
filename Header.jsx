import React from 'react';
import Timer from './Timer.jsx';
import logo from './logo.png';
class Logo extends  React.Component {
  render(){
    return (
      <a href="/">
        <img className="kittens" src={logo} alt="Logo here" width={50} height={50}/>
      </a>
    )
  }
}
class Header extends React.Component {
  render() {
    let headerStyle = {
      color: 'red',
      fontSize: '20px'
    }
    return (
      <div className="label">
        <h4 className="class-1" style={headerStyle}>
          <Logo/>
          My Todo Application <Timer/></h4>

      </div>
    );
  }
}

export default Header;