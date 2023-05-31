import React, { useState ,useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Role } from "./Role";
const Login = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [role,setRole]=useState('Viewer');
  const [tempUser,setTempUser]=useState("");
 const [user,setUser]=useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")

    const temp={username,password,role}
   setTempUser({ username, password, role });
   setUser((user)=>[...user,temp])
    setUsername('')
    setPassword('')
    localStorage.setItem('user', user)
//     console.log(user)
  };
  console.log(user)

 


//   useEffect(() => {
//     newUsers(tempUser)
//   }, [tempUser])
  
  return ( 
    <>
    <form onSubmit={handleSubmit} className="form">
    <div className='form-group'>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        className='user'
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      </div>
      <div className='form-group'>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          className='password'
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div>
      <label>
          Pick your role:
          <select value={role} className='role'onChange={({target})=>setRole(target.value)}>
            <option value="Viewer">Viewer</option>
            <option value="Admin">Admin</option>
          </select>
        </label>
        </div>    
      
        <button type="submit" className='btn'>Login</button>
    </form>       
  
     <Role tempUser={tempUser} user={user}/>
     </>
  );
};

export default Login;
