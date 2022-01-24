import api from './api/api';
import './App.css';
import React,{useState,useEffect} from 'react';
import UserCard from './components/UserCard';

function App() {
  const [users,setUsers]=useState(null);
  const getAllUser=async()=>{
    const data=await api.get("/users");
    setUsers(data.data);
  }
  console.log(users);
   useEffect(()=>{
    getAllUser();
   },[])

  if(!users)return <>Loading...</>
  return (
    <div className="App">
      {
        users.map((user)=>{
          return <UserCard user={user} />
        })
      }
    </div>
  );
}

export default App;
