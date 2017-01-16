import React from 'react';
import SayHello from './Hello.jsx';
class Body extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
  }

  render() {
    return (
      <div>
        <SayHello to={"Mary"}/>
        <SayHello to={"Tom"}/>
        <SayHello to={"Jerry"}/>
      </div>
    );
  }
}
export default Body;