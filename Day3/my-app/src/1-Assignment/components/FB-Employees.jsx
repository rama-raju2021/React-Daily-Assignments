import React, { useState } from "react";

export default function Employees() {
  const [name] = useState("Raj");
  const [description] = useState("Project Manager");
  return (
    <div className="bdr">
      <h2 className="txt-hd">{name}</h2>
      <p>{description}</p>
    </div>
  );
}
