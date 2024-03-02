import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import httpReq from '../service/httpReq';


const ResetPassword = () => {
    const[email,setEmail]=useState('');
    function isValidEmail(email){
      const valid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email.match(valid);
    }
    const postData = async(url,data)=>{
        try{
            let response = await httpReq.post(url,data);
            console.log(response);
            if(response.status===200){
              alert('Instructions has been sent to your email !!');
              setEmail('');
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleSubmit =()=>{
      if(isValidEmail(email)){
        postData('/resetpassword',{email});
      }else{
        alert('Please enter a valid email');
      }
    }
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-2">
          <div className="hidden lg:block bg-contain bg-[#ebf5f3] py-8 px-12  ">
            <Link to="/" className="">
              <img
                className="max-h-12  transition duration-150 hover:ease-out hover:opacity-85 "
                src="https://www.app.aisensy.com/static/media/full_logo.5c8cd2004689fd2d18de.png"
                alt="logo"
              />
            </Link>
            <div className="text-3xl font-bold tracking-wider text-center m-6">
            
            </div>
            <img src="https://www.app.aisensy.com/static/media/store-01.177d4d436865e0fc95ae.png" />
          </div>
          <div className='px-10'>
              <div className="py-6 lg:py-8 flex flex-col ">
                <Link to="/" className="lg:hidden">
                  <img
                    className="max-h-10  transition duration-150 hover:ease-out hover:opacity-85 "
                    src="https://unicorn-cdn.b-cdn.net/67244a6e-1849-42d1-ae59-0afc5948afa8/aisensy---whatsapp-marketing-platform-logo.png"
                    alt="logo"
                  />
                </Link>
                <div className='text-right text-slate-500'>Not a member yet ? 
                  <Link className='text-blue-800' to='/pricing'>Sign up</Link>
                </div>
                <div className='px-16 py-5'>
                  <h4 className='text-md my-2 mt-5 text-slate-500'></h4>
                  <h3 className='text-3xl tracking-wide font-semibold'>Reset Your Password</h3>
                  <p className='my-6 mb-8'>
                  To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process.
                  </p>
                </div>
                <div className='px-6'>
                    <div className='my-4'>
                        <label className='text-gray-500 font-medium my-2'>Email Address</label>
                        <input
                            type='text'
                            name='email'
                            className='border-2 rounded-lg my-2 border-slate-500  w-full py-2 px-4'
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-6">
                        <button 
                        type='submit'
                         onClick={()=>handleSubmit()} 
                        disabled={!email } className={`w-full rounded-lg text-white font-semibold py-2 text-lg bg-[#0a474c] disabled:bg-[#e0e0e0] disabled:text-gray-400 `}>
                        Reset Password
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ResetPassword
