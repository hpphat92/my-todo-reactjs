import React from 'react';
import ReactDOM from 'react-dom';
class Dropdown extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
    this.toggleOpenDropdown = this.toggleOpenDropdown.bind(this);
    this.state = {
      dropdownOpened: false
    }
  }

  toggleOpenDropdown(e) {
    e.stopPropagation();
    this.setState(function (prevState) {
      return {
        dropdownOpened: !prevState.dropdownOpened
      }
    })
  }

  closeDropdown() {
    this.setState({
      dropdownOpened: false
    })
  }

  componentDidUpdate() {
    let self = this;
    let bindClickEvent = function (e) {
      e.stopPropagation();
      self.closeDropdown();
      this.removeEventListener('click', bindClickEvent);
    };
    if (this.state.dropdownOpened) {
      document.querySelector('body').addEventListener("click", bindClickEvent);
    }

  }

  selectItem(item) {
    debugger;
    this.setState({
      selectedContent: item
    })
  }

  render() {
    let self = this;
    let dropdownListContent = this.props.list.map((l, idx) => {
      return (
        <li className="ddl-option" key={idx} onClick={self.selectItem}>{l}</li>
      )
    });
    let dropdownContent = this.state.dropdownOpened ? (
        <ul className="dropdown-menu">{dropdownListContent}</ul>) : null;
    return (
      <div className="ddl open">
        <button onClick={this.toggleOpenDropdown}
                className="btn btn-default btn-ddl">
          {this.state.selectedContent} &#9660; </button>
        {dropdownContent}
      </div>
    )
  }
}
export default Dropdown

// <ul class="dropdown-menu login-username-dropdown" aria-labelledby="dLabel">
//   <li>
//   <a href="/Account/Profile" title="Manage">Profile</a>
//   </li>
//   <li><a href="javascript:document.getElementById('logoutForm').submit()">Log off</a></li>
// </ul>