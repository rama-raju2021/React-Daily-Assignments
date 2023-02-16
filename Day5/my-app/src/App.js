import "./App.css";
import React from "react";
import ClassComponent from "./Assignment/Components/ClassComponent";
import FunctionalComponent from "./Assignment/Components/FunctionalComponent";
import CBCounterComponent from "./Assignment/Components/CBCounterComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <CBCounterComponent />
      <br></br>
      
      <ClassComponent />
      <br></br>
      
      <FunctionalComponent />F
    </div>
  );
}

export default App;
