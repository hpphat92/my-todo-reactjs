import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;