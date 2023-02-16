import React from "react";

export default class Birds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Peacock",
      description:
        "The Indian peacock, also known as the common peafowl, and blue peafowl, is a peafowl species native to the Indian subcontinent. It has been introduced to many other countries.",
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
