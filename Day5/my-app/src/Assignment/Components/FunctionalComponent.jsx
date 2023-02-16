import React, { useState, useEffect } from "react";

const FunctionalComponent = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  return (
    <div className="container">
      <h1 class="txt-hd1">
        User's details displaying in "FUNCTIONAL COMPONENT WITH API FETCH CALL"
      </h1>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default FunctionalComponent;
