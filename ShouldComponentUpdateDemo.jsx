import React from 'react';
function log(msg) {
  document.querySelector('#console').innerText += `\n${msg}.`;
}
function clear() {
  document.querySelector('#console').innerText = "";
}
class ParentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 2
    }
  }

  set(val) {
    this.setState({x: val}, () => {
      log(`Changed State of parent component to x=${this.state.x}`);
    })
  }

  shouldComponentUpdate() {
    return this.state.shouldComponentUpdatedBoolean;
  }

  updateStatus() {
    this.setState((prevState) => {
      return {
        shouldComponentUpdatedBoolean: !prevState.shouldComponentUpdatedBoolean
      }
    })
  }

  componentDidUpdate() {
    log('Parent Component Updated');
  }

  componentWillUpdate() {
    log('Parent Component Will Be Updated');
  }

  render() {
    return (
      <div className="parent-comp">
        Parent state: {this.state.x} {!!this.state.shouldComponentUpdatedBoolean}
        <NoProps/>
        <PropComponent v={this.state.x}/>
        <button onClick={() => this.set(1)}>Change state x=1</button>
        <button onClick={() => this.set(3)}>Change state x=3</button>
        <button onClick={() => this.forceUpdate()}>Force Update</button>
        <input class="block" type="checkbox" value="this.state.shouldComponentUpdatedBoolean" onChange={() => this.updateStatus()}/> Component need updated
      </div>
    )
  }
}

class NoProps extends React.Component {

  render() {
    return (
      <div className="child-no-props">Component without props passed</div>
    )
  }

  shouldComponentUpdate() {
    log('Check should component update for Component without props passed and return true');
    return true;
  }
  componentDidUpdate() {
    log('Component without props passed re-renderd');
  }
}
class PropComponent extends React.Component {

  render() {
    return (
      <div className="child-props">Component with props passed {this.props.v}</div>
    )
  }

  shouldComponentUpdate() {
    log('Check should component update for Component with props passed and return true');
    return true;
  }
  componentDidUpdate() {
    log(`Component with props passed rendered with next props: ${this.props.v}`)
  }

  componentWillUpdate() {
    log(`Component with props passed will be rendered with next props: ${this.props.v}`)
  }
}

class ShouldComponentUpdateDemo extends React.Component {

  constructor(props) {
    super(props);
  }

  clear() {
    clear()
  }

  render() {
    return (
      <div className="should-component-update-demo">
        <ParentComp/>
        <div className="console">
          Console: <span class="pointer" onClick={() => this.clear()}>[X]</span>
          <div id="console"></div>
        </div>
      </div>
    )
  }
}
export default ShouldComponentUpdateDemo;