import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function LivingThings() {
  return (
    <div>
     
     <Link to="cbbirds"> <Button className="mb-2 mt-2 btnwd">
            Birds
          </Button></Link>
          <br/>
       <Link to="cbusers">   <Button className="mb-2 mt-2 btnwd">
            Users
          </Button></Link>
        
       <br/>
         
        <Link to="cbemployees">  <Button className="mb-2 mt-2 btnwd">
            Employees
          </Button></Link>
          <br/>
         <Link to="cbanimals"> <Button className="mb-2 mt-2 btnwd">
            Animals
          </Button>
        </Link>
    </div>
  );
}
