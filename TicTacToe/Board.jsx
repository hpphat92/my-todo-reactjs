import React from 'react';
import {connect} from 'react-redux'
import Cell from './Cell.jsx';
import * as _ from 'lodash';
class Board extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
    this.state = {
      currentUser: 'X'
    };
  }

  selectCell(cb) {
    return new Promise((resolve, reject) => {
      this.setState({
        currentUser: this.state.currentUser === 'X' ? 'O' : 'X'
      });
      resolve(this.state.currentUser);
    });
  }

  render() {
    let listCells = (
      _.map([0, 1, 2], (iRow, idx) => {
        return (
          <div key={idx + '-' + iRow} className="row">
            <Cell row={iRow} col={0}  onClick={this.selectCell.bind(this)} />
            <Cell row={iRow} col={1}  onClick={this.selectCell.bind(this)} />
            <Cell row={iRow} col={2}  onClick={this.selectCell.bind(this)} />
          </div>
        )
      })
    )
    return (
      <div class="board">
        {listCells}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listTodoes: state.gTodoesList
  }
};

// Create new component
export default connect(null, null)(Board);