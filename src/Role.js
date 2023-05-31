import React from 'react'
import { Link } from "react-router-dom";
import Viewer from './Viewer';
import Dashboard from './Dashboard';

export const Role = ({tempUser,user}) => {
   
  return (
    <>
    {tempUser.role==='Viewer' ?
     <Link to='viewer'>
     <Viewer />
     </Link>
     :
     <Link to='dashboard'>
     <Dashboard user={user}/>
     </Link>
    }
    </>
  )
}
