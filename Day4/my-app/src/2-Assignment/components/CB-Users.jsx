import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raju",
      description: "Raju is an UI/UX Lead handling the team"
    };
  }

  render() {
    return (
      <div>
        <h2 class="txt-hd1">{this.state.name}</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
