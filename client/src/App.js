import React, { useState, useEffect } from 'react';
import api from './api/api';
import UserCard from './components/UserCard';
import GetUser from './components/GetUser/GetUser';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Actions from './components/Actions/Actions';
function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getAllUsers() {
      const { data: usersData } = await api.get("/users");
      setUsers(usersData);
    }
    getAllUsers()
  }, [])

  if (!users) return <>Loading...</>
  return (
    <div className="App">
      {users.map((user) => <UserCard user={user} />)}
      <AddUser/>
      <GetUser/>
      <Actions/>
    </div>
  );
}

export default App;
