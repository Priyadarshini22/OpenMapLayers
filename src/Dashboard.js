import React from 'react'

export const Dashboard = ({user}) => {
    console.log(user)
  return (
    
    <div>
        <table className="table">
            <thead >
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
            {
                user.map((user, index)=>{
                  if(user.role==="Viewer")
                  {
                    return(
                        <tr key={index}  >
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                        </tr>
                    )
                  }
                })
            }
            </tbody>
        </table>  
    </div>
  )
}
export default Dashboard;