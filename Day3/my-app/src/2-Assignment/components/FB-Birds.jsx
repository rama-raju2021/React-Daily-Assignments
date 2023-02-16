import React from "react";

export default function Birds(props) {
  const description = props.description;
  const bird = props.birdName;

  return (
    <div className="bdr">
      <h2 className="txt-hd1">{bird}</h2>
      <p>{description}</p>
    </div>
  );
}
