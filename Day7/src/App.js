import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import PropTypes from 'prop-types';
import { getEmployee, addEmployee, editEmployee, deleteEmployee } from './Redux/action';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      employeeName: "",
      employeeDepartment: ""
    };
  }

  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployee: PropTypes.func.isRequired,
    addEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getEmployee();
  }

  submitData = () => {
    if (this.state.employeeName && this.state.employeeDepartment && !this.state.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        employeeName: this.state.employeeName,
        employeeDepartment: this.state.employeeDepartment,
      };

      this.props.addEmployee(newEmployee);
    } else if (this.state.employeeName && this.state.employeeDepartment && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        employeeName: this.state.employeeName,
        employeeDepartment: this.state.employeeDepartment,
      };

      this.props.editEmployee(updatedDetails);
    } else {
      alert('Enter Employee Details.');
    }

    this.clearData();
  }

  editDetails = (data) => {
    this.setState({
      id: data.id,
      employeeName: data.employeeName,
      employeeDepartment: data.employeeDepartment
    })
  }

  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteEmployee(id);
    }
  }

  handleNameChange = (e) => {
    this.setState({
      employeeName: e.target.value
    });
  }

  handleDepartmentChange = (e) => {
    this.setState({
      employeeDepartment: e.target.value
    });
  }

  clearData = () => {
    this.setState({
      id: 0,
      employeeName: "",
      employeeDepartment: ""
    });
  }

  render() {
    return (
      <div className="container">
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CRUD opeartions for Employee Module</h1>
        </header> */}
        <p className="App-intro">
          <div className="form-group row">
          <div className="leftsection">
            
          <label  class="col-sm-2 col-form-label">Employee Name </label> <input onChange={this.handleNameChange} value={this.state.employeeName} type="text" placeholder="Employee Name" className="form-control"/>
          <label  class="col-sm-2 col-form-label">Employee Department </label>  <input onChange={this.handleDepartmentChange} value={this.state.employeeDepartment} type="text" placeholder="Employee Department"  className="form-control"/><br />


            {this.state.id ? <button onClick={this.submitData} className="btn btn-primary">UPDATE</button> : <button onClick={this.submitData} className="btn btn-primary">ADD</button>} &nbsp;&nbsp;<button onClick={this.clearData} className="btn btn-primary">CLEAR</button>
          </div>
          </div>


<div className="clearfix"><br/></div>
          
          <div className="rightsection" >
            <table id="customers">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Depatment Name</th>
                  <th>Action(s)</th>
                </tr>
              </thead>
              <tbody>
                {this.props.employees && this.props.employees.map((data, index) => {
                  return <tr key={(index + 1)}>
                    <td>{(index + 1)}</td>
                    <td>{data.employeeName}</td>
                    <td>{data.employeeDepartment}</td>
                    <td><button onClick={() => this.editDetails(data)} className="btn btn-primary">EDIT</button> <button onClick={() => this.deleteEmployee(data.id)} className="btn btn-primary">DELETE</button> </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </p>
      </div></div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(mapStateToProps, { getEmployee, addEmployee, editEmployee, deleteEmployee })(App);