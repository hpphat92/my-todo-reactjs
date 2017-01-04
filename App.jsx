import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Home from './Home.jsx';
import ShouldComponentUpdateDemo from './ShouldComponentUpdateDemo.jsx';
import TicTacToeBoard from './TicTacToe/Board.jsx';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Router history={browserHistory}>
          <Route path="/todo" component={Body}/>
          <Route path="/tictactoe" component={TicTacToeBoard}/>
          <Route path="/shouldcomponentupdate" component={ShouldComponentUpdateDemo}/>
          <Route path="*" component={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;