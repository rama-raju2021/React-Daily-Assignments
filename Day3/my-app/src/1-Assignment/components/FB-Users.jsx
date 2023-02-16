import React, { useState } from "react";

export default function Users() {
  const userDetails =
    "Rama  is an UI UX Designer ";
  const [user] = useState("rama");
  const [description] = useState(userDetails);
  return (
    <div className="bdr">
      <h2 className="txt-hd1">{user}</h2>
      <p>{description}</p>
    </div>
  );
}
