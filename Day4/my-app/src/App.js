
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import LivingThings1 from './1-Assignment/components/FB-LivingThings';
import LivingThings2 from './2-Assignment/components/CB-LivingThings';

// For Assignment 1st Functional components with useState hook
import FBUsers from './1-Assignment/components/FB-Users';
import FBBirds from './1-Assignment/components/FB-Birds';
import FBEmployees from './1-Assignment/components/FB-Employees';
import FBAnimals from './1-Assignment/components/FB-Animals';

// For Assignment 2nd Statefull Class components
import CBUsers from './2-Assignment/components/CB-Users';
import CBBirds from './2-Assignment/components/CB-Birds';
import CBEmployees from './2-Assignment/components/CB-Employees';
import CBAnimals from './2-Assignment/components/CB-Animals';

// API call for Photo and Employees date 
import Button from "react-bootstrap/Button";
import Photos from './3-Assignment/components/Photos';
import Employees from './3-Assignment/components/Employees';

function App() {
  return (
    <div className="container">

      {/* For Assignment 1st Functional components with useState hook */}
      <div className="row mb-2">
        <h4 className="mb-2 txt-hd">
          Assignment 1: Fuctional Componests with UseState Hook rendering using REACT ROUTER DOM </h4>
      </div>
      <div className="row bdr">
        <div className="col-2 ">
          <LivingThings1 />
        </div>
        <div className="col-10 ">
          <Routes>
            <Route path="/fbusers" element={<FBUsers></FBUsers>}></Route>
            <Route path="/fbbirds" element={<FBBirds></FBBirds>}></Route>
            <Route path="/fbemployees" element={<FBEmployees></FBEmployees>}></Route>
            <Route path="/fbanimals" element={<FBAnimals></FBAnimals>}></Route>
          </Routes>
        </div>
      </div>

      {/* Routing For Assignment 2nd Statefull Class components */}
      <div className="row mb-2 mt-5">
        <h4 className="mb-4 txt-hd">
          Assignment 2: Statefull Class Componests with State rendering using REACT ROUTER DOM </h4>
      </div>
      <div className="row bdr">
        <div className="col-2 ">
          <LivingThings2 />
        </div>
        <div className="col-10 ">
          <Routes>
            <Route path="/cbusers" element={<CBUsers></CBUsers>}></Route>
            <Route path="/cbbirds" element={<CBBirds></CBBirds>}></Route>
            <Route path="/cbemployees" element={<CBEmployees></CBEmployees>}></Route>
            <Route path="/cbanimals" element={<CBAnimals></CBAnimals>}></Route>
          </Routes>
        </div>
      </div>

      {/* Routing For List of Photos and Employees details */}
      <h4 className="mb-2 mt-3 txt-hd">
        Assignment 3:API call for Photos and Employees with Routing</h4>

      <div className="row">
        
           <Link to="photoslist"> <Button className="mb-2 mt-2 btnwd">
              Photos
            </Button></Link>
         
         <br/>
           <Link to="employeeslist"> <Button className="mb-2 mt-2 btnwd">
              Employees
            </Button></Link>
        

        <div className="row ">
          <Routes>
            <Route path="/photoslist" element={<Photos />}></Route>
            <Route path="/employeeslist" element={<Employees />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
