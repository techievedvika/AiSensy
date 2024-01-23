import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import httpReq from '../service/httpReq';
import authService from '../service/authService';

const LoginForm = () => {
  const[form,setForm]=useState({email:'',password:''});
  const handleChange = (e)=>{
    let {name,value}=e.target;
    let f1 = {...form};
    f1[name]=value;
    setForm(f1);
  }
  const postData = async(obj,url)=>{
    try{
      let res = await httpReq.post(url,obj);
      //console.log(res.data);
      authService.login(res.data);
      window.location = '/dashboard';
    }catch(err){
      console.log(err);
      if(err && err.response && err.response.status===400){
        alert(err.response.data);
      }
    }
  }
  const handleSubmit = ()=>{
      
        postData(form,'/login');
       
  }
  return (
    <div>
       <div className='my-4'>
          <input
            type='text'
            name='email'
            className='border-2 rounded-lg border-slate-500  w-full py-2 px-4'
            placeholder='Username / Email'
            value={form.email}
            onChange={handleChange}
          />
       </div>
       <div className='my-4'>
          <input
            type='password'
            name='password'
            className='border-2 rounded-lg border-slate-500  w-full py-2 px-4'
            placeholder='Password'
            value={form.password}
            onChange={handleChange}
          />
       </div>
       <div className="">
        <button onClick={()=>handleSubmit()} disabled={!form.email || !form.password} className={`w-full rounded-lg text-white font-semibold py-2 text-lg bg-[#0a474c] disabled:bg-[#e0e0e0] disabled:text-gray-400 `}>Continue</button>
       </div>
       <div className=' text-sm my-3 text-center text-blue-600'>
       <Link to='/' >Forgot Password?</Link>
       </div>
      
    </div>
  );
}

export default LoginForm
