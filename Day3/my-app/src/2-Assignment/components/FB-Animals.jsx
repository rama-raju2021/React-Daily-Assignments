import React, { useState } from "react";

export default function Animals(props) {
  
  const animal = props.animalName
  const aboutLion =
  "The Tiger is a large cat of the genus Panthera native to Africa and India. It has a muscular.";
// const [name] = useState("Lion");
const [description] = useState(aboutLion);
  
  return (
    <div className="bdr">
      <h2 className="txt-hd1">{animal}</h2>
      <p>{description}</p>
    </div>
  );
}
