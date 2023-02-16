import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tiger",
      description:
        "The Tiger is a large cat of the genus Panthera native to Africa and India. It has a muscular.",
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
