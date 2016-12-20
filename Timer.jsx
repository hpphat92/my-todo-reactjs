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
      <span className="h5">Today: {this.state.date.toLocaleTimeString()}</span>
    )
  }
}

export default Timer;