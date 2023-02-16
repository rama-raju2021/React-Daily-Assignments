import React from "react";
import Counter from "./FB-Counter";

export default class LivingThings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <>
        <h5>You have clicked {this.state.counter} times</h5>
        <Counter increamentCounter={this.handleClick} />
      </>
    );
  }
}
