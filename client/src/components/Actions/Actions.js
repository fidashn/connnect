import React, { useState } from 'react';
import api from '../../api/api';

const Actions = () => {
 const [actionInfo, setActionInfo]= useState({
  targetId:0,
   amount:0,
    })

 const [userId, setUserId] = useState(0);
 const [action, setAction] = useState("withdraw");
 const actionInfoHandler= (e) =>{
  const {name, value} = e.target;
  setActionInfo(prevState => ({
    ...prevState, 
    [name]:value
  }))
}

const sendAction = async () =>{
  const data = await api.put(`/users/${action}/${userId}`, actionInfo);
  console.log(data);
}

  return <div className='card flexing-center'>
  <h1>Actions:</h1>
  <label htmlFor="">ID</label>
  <input type="number" onChange={(e)=>setUserId(e.target.value)} />
  <input type="number" onChange={(e)=>actionInfoHandler(e)} name='targetId'/>
  <input type="number" onChange={(e)=>actionInfoHandler(e)} name='amount'/>
  <select name="action" onChange={(e)=>setAction(e.target.value)}>
  <option value="credit">Update Credit</option>
  <option value="deposit">Deposit</option>
  <option value="withdraw">withdraw</option>
  <option value="transfer">transfer</option>
</select>

  <button onClick={()=>sendAction()}>go</button>
  </div>;
};

export default Actions;
