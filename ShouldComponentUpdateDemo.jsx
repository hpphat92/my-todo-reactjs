import React from 'react';
function log(msg, id) {
  if (document.querySelector('#console')) {
    document.querySelector('#console').innerHTML += `<br><div class="msg ${id}">${msg}</div>.`;
  }
}
function clear() {
  if (document.querySelector('#console')) {
    document.querySelector('#console').innerHTML = "";
  }
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
      log(`Changed State of parent component to x=${this.state.x}`, 'parent');
    })
  }

  shouldComponentUpdate() {
    log(`Check should component update for parent component and return ${!!this.state.shouldComponentUpdatedBoolean}. Value of this.state.x = ${this.state.x}`, 'parent');
    return !!this.state.shouldComponentUpdatedBoolean;
  }

  updateStatus() {
    this.setState((prevState) => {
      return {
        shouldComponentUpdatedBoolean: !prevState.shouldComponentUpdatedBoolean
      }
    })
  }

  componentDidUpdate() {
    log('Parent Component DID re-rendered. this.state.x = ' + this.state.x, 'parent');
  }

  componentWillUpdate() {
    log('Parent Component WILL be re-rendered. this.state.x = ' + this.state.x, 'parent');
  }

  render() {
    log(`Rendering parent: this.state.x = ${this.state.x}`, 'parent');
    return (
      <div className="parent-comp">
        Parent state: {this.state.x} {!!this.state.shouldComponentUpdatedBoolean}
        <NoProps/>
        <PropComponent v={this.state.x}/>
        <button onClick={() => this.set(1)}>Change state x=1</button>
        <button onClick={() => this.set(3)}>Change state x=3</button>
        <button onClick={() => this.forceUpdate()}>Force Update</button>
        <div>

          <input type="checkbox" value="this.state.shouldComponentUpdatedBoolean"
                 onChange={() => this.updateStatus()}/> Component need updated
        </div>
      </div>
    )
  }
}

class NoProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 3
    }
  }

  set(val) {
    this.setState({x: val});
  }

  render() {
    return (
      <div className="child-no-props">
        Component without props passed (local state) x: {this.state.x}
        <button onClick={() => this.set(1)}>Change state x=1</button>
        <button onClick={() => this.set(5)}>Change state x=5</button>
      </div>
    )
  }

  shouldComponentUpdate() {
    log('Check should component update for Component without props passed and return true. The value of this.state.x = ' + this.state.x, 'no-prop');
    return true;
  }

  componentDidUpdate() {
    log('Component without props passed DID re-rendered', 'no-prop');
  }

  componentWillUpdate() {
    log('Component without props passed WILL be rendered', 'no-prop');
  }
}
class PropComponent extends React.Component {

  render() {
    return (
      <div className="child-props">Component with props passed {this.props.v}</div>
    )
  }

  shouldComponentUpdate() {
    log('Check should component update for Component with props passed and return true', 'has-prop');
    return true;
  }

  componentDidUpdate() {
    log(`Component with props passed DID rendered with next props: ${this.props.v}`, 'has-prop')
  }

  componentWillUpdate() {
    log(`Component with props passed WILL be rendered with next props: ${this.props.v}`, 'has-prop')
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
          Console: <span className="pointer" onClick={() => this.clear()}>[X]</span>
          <div id="console"></div>
        </div>
      </div>
    )
  }
}
export default ShouldComponentUpdateDemo;