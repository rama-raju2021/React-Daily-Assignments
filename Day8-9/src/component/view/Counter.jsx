// ======================================
//  Third File  created as View
// ======================================
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      empDetails: {},
    };
  }
  render() {
    return <div>
        <div className=" row col-md-12 mt-3">
          <h1 className="col-md-2">{this.props.counter}</h1>
          <div className="col-md-2">
            <button type="button" className="btn btn-primary" onClick={async() => await this.props.increment()}>
              Increment
            </button>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-primary" onClick={async() => await this.props.decrement()}>
              Decrement
            </button>
          </div>
        </div>

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
      </div>; 
  }
   async componentDidMount() {
    await this.getUsers();
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
}

//this function will be used at initial stage get data from reducer file
const loadInitialValues = (state) =>{
    return { counter : state.counter };
}
//this function will be used action made
const callReducerAction = (dispatch) =>{
    return{
        increment : () =>{            
            dispatch({type : 'INC', add_plus : 1});
        },
        decrement:()=>{           
            dispatch({type : 'DEC', add_minus : 1});
        }
    }
}



export default connect(loadInitialValues, callReducerAction)(Counter);