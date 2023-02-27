import React, { Component } from 'react';
import './App.css'

// Ui load
import Counter from "./component/view/Counter";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
