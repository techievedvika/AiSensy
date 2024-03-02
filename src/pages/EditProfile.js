import React, { useState,useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn';
import httpReq from '../service/httpReq';
import authService from '../service/authService';
import NavMenu from '../components/NavMenu';

const EditProfile = ({show,onShow,onClose,lgScreen}) => {
    const [form,setForm] = useState({name:'',email:'',mobile:'',address:''});
    const [pform,setPform] = useState({password:'',newpassword:'',confirmpassword:''})
    const user = authService.getUser();
    // console.log(user);
    // console.log(user?._id);
    // console.log(user.name);
    useEffect(()=>{
        const fetchData = async() =>{
            try{
               
                 let res = await httpReq.get(`/getuser/${user._id}`);
                 //console.log(res.data);
                 setForm(res.data);
                 //console.log(form);
            }catch(err){
                console.log(err);
            }
        };
        fetchData();
    },[]);
    const putData = async(url,obj)=>{
        try{
            let res = await httpReq.put(url,obj);
            if(res.status===201){
                console.log(res.status);
                //fetchData();
            }
            //console.log(res);
        }catch(err){
            console.log(err);
        }
    }
    const handleChange =(e)=>{
        let {name,value}=e.target;
        let userform ={...form};
        userform[name]=value;
        setForm(userform);
    }
    const handleSubmit = ()=>{
        putData(`/editprofile/${user._id}`,form);
    }
    const handlepchange =(e)=>{
        let {name,value}=e.target;
        let p1 = {...pform};
        p1[name]=value;
        setPform(p1);
    }
    const handlePSubmit = ()=>{
        putData(`/editprofile/password/${user._id}`,pform);
    }
  return (
      <div className="grid grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
          <div className={`lg:ms-60 lg:relative col-span-12 border ${show && 'hidden'}`}>
                <NavMenu
                onShow={onShow}
                page={'Profile'}
                />
              {/* Messages */}
              <div className="bg-[#f7f7f7]  flex flex-col     gap-4 w-full p-6 lg:px-10 ">
                {/* General Settings */}
                <div className='flex flex-col my-4 mt-8 lg:flex-row gap-6 lg:justify-between'>
                    <div>
                        <h5 className='font-semibold'>General Settings</h5>
                        <h6>Edit your basic credentials </h6>
                    </div>
                    {/* General Settings form */}
                    <div className='bg-white p-8 rounded-md shadow-md px-12 lg:w-2/3 border'>
                        {/* Name */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Name</label>
                            <input
                                name='name' 
                                value={form.name}
                                onChange={handleChange}
                                type='text' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Email */}
                        <div className='my-2'>
                            <label 
                            className='text-slate-500 my-2 font-semibold'>Email</label>
                            <input 
                             name='email' 
                            value={form.email}
                            onChange={handleChange}
                            type='email' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Phone */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Phone</label>
                            <input
                            name='mobile'
                            value={form.mobile}
                            onChange={handleChange} 
                            type='number' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Address */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Address <span className='text-sm'>(will be used for invoice)</span></label>
                            <input
                            name='address'
                            value={form.address}
                            onChange={handleChange} 
                            type='text' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Image */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Avatar</label>
                            <br/>
                            <input type='file' className='bg-[#f7f7f7] mt-2   my-1 rounded-md '/>
                        </div>
                        {/* Submit */}
                        <button onClick={()=>handleSubmit()} className='p-2 my-4 text-sm border border-[#0a474c] font-medium text-[#0a474c] mt-8 hover:text-white rounded-md hover:bg-[#0a474c]'>Update Settings</button>
                    </div>
                </div>
                {/* Password Update */}
                <div className='flex flex-col my-4  lg:flex-row gap-6 lg:justify-between'>
                    <div>
                        <h5 className='font-semibold'>Password</h5>
                        <h6>Change Your Password </h6>
                    </div>
                    {/* General Settings form */}
                    <div className='bg-white p-8 rounded-md shadow-md px-12 lg:w-2/3 border'>
                        {/* Old Password */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Old Password</label>
                            <input 
                            name='password'
                            value={pform.password}
                            onChange={handlepchange}  
                            type='password'
                            required  
                            className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* New Password */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>New Password</label>
                            <input
                            name='newpassword'
                            value={pform.newpassword}
                            onChange={handlepchange}
                            required    
                            type='password' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Confirm Password */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Confirm Password</label>
                            <input
                            name='confirmpassword'
                            value={pform.confirmpassword}
                            onChange={handlepchange}   
                            type='password'
                            required 
                            className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        
                        {/* Submit */}
                        <button onClick={()=>handlePSubmit()} className='p-2 my-4 text-sm border border-[#0a474c] font-medium text-[#0a474c] mt-8 hover:text-white rounded-md hover:bg-[#0a474c]'>Update Password</button>
                    </div>
                </div>
              </div>  
          </div>
      </div>
  )
}

export default EditProfile
