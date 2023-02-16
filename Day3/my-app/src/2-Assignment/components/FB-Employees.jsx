import React from "react";

export default function Employees(props) {
  const name = props.EmpName;
  const empDesignation = props.empDesignation;
  return (
    <div className="bdr">
      <h2 className="txt-hd1">{name}</h2>
      <p>{empDesignation}</p>
    </div>
  );
}
