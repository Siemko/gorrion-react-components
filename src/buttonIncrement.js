import React from 'react'
import Button from 'button'

export default class ButtonIncrement extends React.Component {
  state = { counter: 0 }


  handleOnClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <Button
        onClick={this.handleOnClick}
        buttonText={`Current counter: ${this.state.counter}`}
      />
    )
  }
}
