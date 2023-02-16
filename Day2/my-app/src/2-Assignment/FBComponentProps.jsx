import React from "react";

const FBComponentProps = ({ list }) => {
  return (
    <div>
      <h3> Functional Component displying Users Detail using PROPS</h3>
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
            {list.map((user, index) => (
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
export default FBComponentProps;
