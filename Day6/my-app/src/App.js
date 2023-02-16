import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./Components/1-Assignment/UserForm";
import Style2UserForm from "./Components/2-Assignment/Style2UserForm";
import Style3UserForm from "./Components/2-Assignment/Style3UserForm";
import Style4UserForm from "./Components/2-Assignment/Style4UserForm";
import CRUDService from "./Components/3-Assignment/CRUDService";

function App() {
  return (
    <div className="App">
      <UserForm />
      <br></br>
     
      <Style2UserForm />
      <br></br>
      
      <Style3UserForm />
      <br></br>
    
      <Style4UserForm />
      <br></br>
   
      <CRUDService />
    </div>
  );
}

export default App;
