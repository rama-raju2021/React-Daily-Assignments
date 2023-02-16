import React, { Component } from "react";
export default class CRUDService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      empDetails: {},
    };
  }

  getUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ usersList: response });
      });
  }

  addUser() {
    const user = { user: "Hasmat" };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ body: user }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        alert(`add user with ID:${response.id}`);
      });
  }

  deleteUser(userID) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        alert("User deleted successfully");
      });
  }

  componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
      <div class="container">
          <div class="panel panel-default">
  <div class="panel-heading">List of users using GET API call </div>
  <div class="panel-body"> 
        <div class="row">
      
        <ul >
          {this.state.usersList.map((user, index) => (
            <li className="ln" key={index} >{user.username}</li>
          ))}
        </ul>
        </div>
        </div>
        </div>
        <br/>
        <div class="row bdr">
        <h3 class="txt-hd1">Add a user using POST API call</h3>
        <div class="col-md-12 text-center"><button  className="btn btn-primary"
          onClick={() => {
            this.addUser();
          }}
        >
          Add User
        </button></div>
        </div>
        <br/>
        <div class="row bdr">
        <h3 class="txt-hd1">Delete a user using DELETE API call</h3>
        <div class="col-md-12 text-center"><button  className="btn btn-primary"
          onClick={() => {
            this.deleteUser(1);
          }}
        >
          Delete User
        </button></div>
      </div></div>
    );
  }
}
