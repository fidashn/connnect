import React from 'react';
import './style.css';

const UserCard = ({user}) => {
  return <div className='card'>
  <div>{user.id}</div>
  <div>{user.userInfo.name}</div>
  <div>{user.cash}</div>
  <div>{user.credit}</div>
  </div>;
};

export default UserCard;
