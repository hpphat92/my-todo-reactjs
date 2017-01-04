import React from 'react';
class Cell extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
    this.state = {
      isSelected: false,
      selectedBy: null
    }
  }

  choiceCell() {
    if (!this.state.isSelected) {
      this.props.onClick && this.props.onClick().then((state) => {
        this.setState({
          isSelected: true,
          selectedBy: state
        })
      })
    }
  }

  render() {
    let classNames = "cell empty";
    let content = this.state.isSelected && this.state.selectedBy;
    content += this.props.row;
    return (
      <div className={classNames} onClick={() => this.choiceCell()}>
        {content}
      </div>
    );
  }
}

// Create new component
export default Cell;