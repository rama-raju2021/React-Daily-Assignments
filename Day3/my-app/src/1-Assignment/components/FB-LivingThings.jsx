import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Birds from "./FB-Birds";
import Users from "./FB-Users";
import Animals from "./FB-Animals";
import Employees from "./FB-Employees";

export default function LivingThings() {
  const [item, setItem] = useState(<Birds></Birds>);
  return (
    <div>
      {item}
      <Stack gap={2} className="col-md-2 mt-2" direction="horizontal">
        <div id="contentArea"></div>
        <Button onClick={() => setItem(<Animals></Animals>)}>Animals</Button>
        <Button onClick={() => setItem(<Users></Users>)}>Users</Button>
        <Button onClick={() => setItem(<Employees></Employees>)}>
          Employees
        </Button>
        <Button onClick={() => setItem(<Birds></Birds>)}>Birds</Button>
      </Stack>
    </div>
  );
}
