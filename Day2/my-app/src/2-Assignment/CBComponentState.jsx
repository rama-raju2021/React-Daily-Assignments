import React from "react";
export default class CBComponentState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfUsers: [
        {
          name: "Lakshmi",
          age: 45,
          gender: "Female",
        },
        {
          name: "Ramam",
          age: 35,
          gender: "Male",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Class Base Component displaying Users Details using STATE</h3>
        <div className="container">
          <table id="customers">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listOfUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
