import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "",
      usersList: [],
    };
  }

  usersList = [];

  changeHandler(event, inputType) {
    if (inputType === "name") {
      this.setState({
        name: event.target.value,
      });
    } else if (inputType === "age") {
      this.setState({
        age: event.target.value,
      });
    } else {
      this.setState({
        gender: event.target.value,
      });
    }
  }

  submitHandler(e) {
    e.preventDefault();
    const name = this.state.name;
    const age = this.state.age;
    const gender = this.state.gender;
    this.state.usersList.push({ name, age, gender });
    this.setState({ usersList: this.state.usersList });
  }

  getDeleteID(index) {
    console.log("Delete ID", index);
  }

  render() {
    return (
      <div className="container">
        <div class="panel panel-default">
  <div class="panel-heading">Users Details Table (usiing Inline styles)</div>
  <div class="panel-body"> 
  <div className="row">
          <div className="col-12">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  onChange={(event) => {
                    this.changeHandler(event, "name");
                  }}
                />
              </Form.Group>

              <Form.Group  controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Age"
                  onChange={(event) => {
                    this.changeHandler(event, "age");
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Gender"
                  onChange={(event) => {
                    this.changeHandler(event, "gender");
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={(event) => {
                  this.submitHandler(event);
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-12 ">
            
            <table id="customers">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.usersList.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>
                      <button className="btn btn-primary"
                        onClick={() => {
                          this.getDeleteID(index);
                        }}
                      >
                        Delete ID
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div></div>
</div>
       
      </div>
    );
  }
}
