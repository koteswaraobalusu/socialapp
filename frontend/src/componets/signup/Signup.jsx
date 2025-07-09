import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../api/authApi';
const Signup = () => {



  const[register,{isError,isSuccess,data,isLoading}]=useRegisterMutation();
  const [formData,setFormData]=useState({
    username:'',
    passwors:'',
    cpassword:''
    })


  return (
    <div className='login'>

        <h1>Instagram</h1>
        <form>
            <input type='text' name='username' placeholder='Username' value={formData.username}required/>
            <input type='password' name='password' placeholder='Password'required/>
            <input type='password' name='conform_passowrd' placeholder='Conform password'/>
            <input type='submit' value="Sign up"/>
        </form>
        <p>Have an account?<Link to='/'>Login</Link></p>
      
    </div>
  )
}

export default Signup;
