
import './App.css';
import CBComponentState from './2-Assignment/CBComponentState';
import FBComponentProps from './2-Assignment/FBComponentProps';
import FBComponentState from './2-Assignment/FBComponentState';

const listOfUsers = [
  {
    name: "John",
    age: 20,
    gender: "Male",
  },
  {
    name: "Sony",
    age: 27,
    gender: "Famale",
  },
]
function App() {
  return (
    <div className="App">
      <CBComponentState />
      
      <br></br>
      <br></br>
      <FBComponentState />
      <br></br>
      <br></br>
      <FBComponentProps list={listOfUsers} />
    </div>
  );
}

export default App;
