import React from 'react';
import api from '../../api/api';
import UserCard from '../UserCard';
import '../style.css'
const GetUser = () => {
  const [user,setUser]=React.useState(null);
  const [userId,setUserId]=React.useState('');
  const getUser=async(id)=>{
    const { data: usersData } = await api.get(`/users/${id}`);
    setUser(usersData);
  }

  return <div className='card flexing-center'>
       <div className='get-user-block'>
       <h1>Get User</h1>
       <input type='text' onChange={(e)=>setUserId(e.target.value)}/>
       <button onClick={()=>getUser(userId)}>GO</button>
       </div>
       <div className='get-user-block'>
       {user?<UserCard user={user}/>:<></>}
       </div>
  </div>;
};

export default GetUser;
