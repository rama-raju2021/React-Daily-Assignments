
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LivingThings1 from './1-Assignment/components/FB-LivingThings';
import LivingThings2 from './2-Assignment/components/FB-LivingThings';
import LivingThings3 from './3-Assignment/components/CB-LivingThings';
import LivingThings4 from './4-Assignment/components/CB-LivingThings';

function App() {
  return (
    <div className="container">
      <h4 className="txt-hd"><span className="text-success">
        Assignment1: </span>Components are displying using Fuctional Componests with the help of UseState Hook</h4>
      <LivingThings1 />
      <hr className="mb-2"></hr>

      <h4 className="txt-hd"><span className="text-success">
        Assignment2: </span>Components are displying using Fuctional Componests with the help of PROPS</h4>
      <LivingThings2 />
      <hr className="mb-2"></hr>

      <h4 className="txt-hd"><span className="text-success">
        Assignment3: </span>Components are displying using Class Componests with the help of State</h4>
      <LivingThings3 />
      <hr className="mb-2"></hr>

      <h4 className="txt-hd"><span className="text-success">
        Assignment4: </span>Counter using Function as  PROPS</h4>
      <LivingThings4 />
    </div>
  )
}

export default App;
