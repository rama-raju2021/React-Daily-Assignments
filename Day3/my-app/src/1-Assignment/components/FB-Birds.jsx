import React, { useState } from "react";

export default function Birds() {
  const aboutLion =
    "The Indian Peacock, also known as the common peafowl, and blue peafowl, is a peafowl species native to the Indian subcontinent. It has been introduced to many other countries.";
  const [name] = useState("Peacock");
  const [description] = useState(aboutLion);
  return (
    <div className="bdr">
      <h2 className="txt-hd">{name}</h2>
      <p>{description}</p>
    </div>
  );
}
