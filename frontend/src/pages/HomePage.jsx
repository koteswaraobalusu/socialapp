import React from 'react'
import { useLogoutMutation } from '../api/authApi';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const [logout,{isError,isLoading,data,isSuccess}]=useLogoutMutation();
    const navigate=useNavigate()

    const handleLogout=async ()=>{
        try{
            const result=await logout();
            console.log(result)
            navigate('/')

        }
        catch(err){
            console.error(err)
        }
        
    }
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomePage
