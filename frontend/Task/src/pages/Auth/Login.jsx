import React, { useState} from 'react'
import AuthLayout from '../../componenets/layouts/AuthLayout'
import {Link, useNavigate} from 'react-router-dom'
import Input from '../../Inputs/Input'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosIntance'
// import { API_PATHS } from '../../utils/apiPath'
const Login = () => {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const [error, setError] =useState("")
  const navigate = useNavigate()
  const handleLogin = async(e)=>{
    e.preventDefault()
    if (!validateEmail(email)) {
  setError("Please enter a valid email address.");
  return;
}

if (!password) {
  setError("Please enter the password");
  return;
}

setError("");
//login api calling
try{
const response= await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
  email,
  password
});
const {token,role}= response.data;
if(token){
  localStorage.setItem("token",token)
  if(role==="admin"){
    navigate("/admin/dashboard")
  }else{
   navigate("/user/dashboard")
  }
}
}catch(err){
  if(err.response&& err.response.data.message){
    setError(err.response.data.message)

  }else{
    setError("Something went wrong. Please try again later.")
  }
  console.log("Login error", err);
}
  }

  return (
   <AuthLayout>
    <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
     <h3 className='text-xl font-semibold text-black'>Welcome back</h3>
     <p className='text-xs text-slate-700 mt-[5px] mb-6'>
      Please enter your details to log in
     </p>
     <form onSubmit={handleLogin}>
      <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />
         <Input
          value={password}
          onChange={(target) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />
        {error && <p className='text-red-500 text-sm my-2'>{error}</p>}
        <button className='btn-primary' onClick={handleLogin}>
          LOGIN
        </button>
        <p className='text-[13px] text-slate-800 mt-3'>
          Don't have an account?{""}
          <Link to="/signup" className='text-primary underline'>Signup
          </Link>
        </p>
     </form>
    </div>
   </AuthLayout>
  )
}

export default Login
