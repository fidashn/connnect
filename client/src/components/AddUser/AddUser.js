import React,{useState} from 'react';
import api from '../../api/api';
const AddUser = () => {
  const [user, setUser] = useState({
    id:0, 
    cash:0,
    credit:0,
  })
  const [userInfo, setInfoUser] = useState({
      name:"",
      age:"",
      city:""
    
  })
const userHandler = (e) =>{
  const {name, value} = e.target;
  setUser(prevState => ({
    ...prevState, 
    [name]:value
  }))
}

const userInfoHandler = (e) =>{
  const {name, value} = e.target;
  setInfoUser(prevState => ({
    ...prevState, 
    [name]:value
  }))
}

const sendUser=async ()=>{
  let dataTosend={...user,userInfo:userInfo};
  const data = await api.post('/users',dataTosend)
  console.log(data)
}
  return <div className='card flexing-center'>
     <h1>User Info</h1>
     <input type="number" name='id' onChange={(e)=>userHandler(e)}/> 
     <input type="text" name="name" onChange={(e)=>userInfoHandler(e)} />
     <input type="number" name="age" onChange={(e)=>userInfoHandler(e)}/>
     <input type="text" name="city"onChange={(e)=>userInfoHandler(e)} />
     <h1>user moeny</h1>
     <input type="number" name="cash" onChange={(e)=>userHandler(e)}/>
     <input type="number" name="credit" onChange={(e)=>userHandler(e)}/>

     <button onClick={()=>sendUser()}>GO</button>
  </div>;
};

export default AddUser;
