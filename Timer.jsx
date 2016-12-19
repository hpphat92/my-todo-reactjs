import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({
      date: new Date()
    }), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  render() {
    return (
      <h5>Today: {this.state.date.toLocaleTimeString()}</h5>
    )
  }
}

export default Timer;