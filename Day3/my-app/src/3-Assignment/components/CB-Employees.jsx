import React from "react";

export default class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj",
      description: "Project Manager",
    };
  }

  render() {
    return (
      <div className="bdr">
        <h2 className="txt-hd1">{this.state.name}</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
