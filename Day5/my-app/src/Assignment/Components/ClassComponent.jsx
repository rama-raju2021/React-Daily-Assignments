import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ userList: response });
      });
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 class="txt-hd1">
            User's details displaying in CLASS COMPONENT WITH API FETCH CALL
          </h1>
          <table id="customers">
            <thead>
              <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
