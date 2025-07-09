import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../api/authApi';



const Login = () => {

    const [login,{data,isLoading,error,isSuccess}]=useLoginMutation();
    const navigate=useNavigate()

    const [formData,setFormData]=useState({
        username:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,[name]:value
        }))
    }






    const handleSubmit=async (e)=>{
        e.preventDefault();


        try{
            const result = await login(formData).unwrap();
            setFormData({
             username:"",
            password:""
        })
            navigate('/home')


        }
        catch(err){
            console.error(err)
        }
    }

    return (
        <div className='login'>
        <h1>Instagram</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} required/>
            <input type='password' name='password' placeholder='Password'value={formData.password} onChange={handleChange} required/>
            <input type='submit' value="Login"/>
        </form>
        <p>Don't have an account?<Link to='/signup'>Sign up</Link></p>
        </div>
    )
}

export default Login
