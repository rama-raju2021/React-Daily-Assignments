import React, { useState } from "react";
const FBComponentState = () => {
  const listOfUsers = [
    {
      name: "Raj",
      age: 35,
      gender: "Male",
    },
    {
      name: "radha",
      age: 25,
      gender: "Famale",
    },
  ];
  const [users] = useState(listOfUsers);

  return (
    <div>
      <h3>
        Functional Component displying Users Detail using USE STATE hook
      </h3>
      <div className="container">
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default FBComponentState;
