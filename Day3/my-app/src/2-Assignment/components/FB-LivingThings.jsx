import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Birds from "./FB-Birds";
import Users from "./FB-Users";
import Animals from "./FB-Animals";
import Employees from "./FB-Employees";

export default function LivingThings() {
  // Properties for Animal
  const animalName = "Tiger";
  const aboutLion =
    "The Tiger is a large cat of the genus Panthera native to Africa and India. It has a muscular.";

  // Properties for Bird
  const birdName = "Peacock";
  const aboutBird =
    "The Indian Peacock, also known as the common peafowl, and blue peafowl, is a peafowl species native to the Indian subcontinent. It has been introduced to many other countries.";

  // Properties for Employee
  const EmpName = "Raj";
  const empDesignation = "Project manager";

  // Properties for User
  const userName = "Rama";
  const aboutUser =
    " UI/UX Desigher";

  const [item, setItem] = useState(
    <Employees EmpName={EmpName} empDesignation={empDesignation}></Employees>
  );
  return (
    <div>
      {item}
      <Stack gap={2} className="col-md-2 mt-2 " direction="horizontal">
        <div id="contentArea"></div>
        <Button
          onClick={() =>
            setItem(
              <Animals
                description={aboutLion}
                animalName={animalName}
              ></Animals>
            )
          }
        >
          Animals
        </Button>
        <Button
          onClick={() =>
            setItem(<Users userName={userName} aboutUser={aboutUser}></Users>)
          }
        >
          Users
        </Button>
        <Button
          onClick={() =>
            setItem(
              <Employees
                EmpName={EmpName}
                empDesignation={empDesignation}
              ></Employees>
            )
          }
        >
          Employees
        </Button>
        <Button
          onClick={() =>
            setItem(<Birds description={aboutBird} birdName={birdName}></Birds>)
          }
        >
          Birds
        </Button>
      </Stack>
    </div>
  );
}
