import React from "react";

export default function Users(props) {
  const user = props.userName;
  const description = props.aboutUser;
  return (
    <div className="bdr">
      <h2 className="txt-hd1">{user}</h2>
      <p>{description}</p>
    </div>
  );
}
