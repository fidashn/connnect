import React from 'react';
import './style.css';
import api from '../api/api';
const UserCard = ({user}) => {
  const {id, userInfo, cash, credit} = user;

  const deleteUser=async ()=>{
    const data=await api.delete(`users/${id}`);
    console.log(data);
  }
  
  return <div className='card'>
  <div className='card-internal'>{id}</div>
  <div className='card-internal'>{userInfo.name}</div>
  <div className='card-internal'>{cash}</div>
  <div className='card-internal'>{credit}</div>
  <button className='delete-btn' onClick={()=>deleteUser()}>X</button>
  </div>;
};

export default UserCard;
