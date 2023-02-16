import React, { useState } from "react";

export default function Users() {
  const userDetails =
    "Raju is an UI/UX Lead handling the UI Team ";
  const [user] = useState("Raju");
  const [description] = useState(userDetails);
  return (
    <div>
      <h2 className="txt-hd1">{user}</h2>
      <p>{description}</p>
    </div>
  );
}
