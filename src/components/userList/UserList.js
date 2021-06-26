import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersCard from "../userCard/UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data));
  }, []);

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      {users.map((user) => (
        <UsersCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;