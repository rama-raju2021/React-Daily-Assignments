import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rama",
      description: "UI/UX Designer"
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
