import React from "react";

export default function Counter(props) {
  return (
    <div className="mb-2">
      <button className="btn btn-primary" onClick={props.increamentCounter}>Click Here</button>
    </div>
  );
}
