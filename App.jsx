import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Home from './Home.jsx';
import {Router, Route, browserHistory} from 'react-router';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Router history={browserHistory}>
          <Route path="/todo" component={Body}/>
          <Route path="/" component={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;