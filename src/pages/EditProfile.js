import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn';

const EditProfile = () => {
    const[showSidebar,setShowSidebar]=useState(false);
  return (
      <div className="grid grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
          <div className={`lg:col-span-11 col-span-12 border ${showSidebar && 'hidden'}`}>
            <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
            />
              {/* Navbar */}
              <div className="flex  bg-white border shadow-md  justify-between p-3 lg:px-6">
                  <h3 className="text-xl"> Edit your profile</h3>
                  <div className="hidden lg:block  justify-around gap-2">
                  </div>
              </div>
              {/* Messages */}
              <div className="bg-[#f7f7f7]  flex flex-col     gap-4 w-full p-6 lg:px-32 ">
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
                            <input type='text' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Email */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Email</label>
                            <input type='email' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Phone */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Phone</label>
                            <input type='number' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Address */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Address <span className='text-sm'>(will be used for invoice)</span></label>
                            <input type='text' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Image */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Avatar</label>
                            <br/>
                            <input type='file' className='bg-[#f7f7f7] mt-2   my-1 rounded-md '/>
                        </div>
                        {/* Submit */}
                        <button className='p-2 my-4 text-sm border border-[#0a474c] font-medium text-[#0a474c] mt-8 hover:text-white rounded-md hover:bg-[#0a474c]'>Update Settings</button>
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
                            <input type='password' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* New Password */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>New Password</label>
                            <input type='password' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        {/* Confirm Password */}
                        <div className='my-2'>
                            <label className='text-slate-500 my-2 font-semibold'>Confirm Password</label>
                            <input type='password' className='bg-[#f7f7f7] mt-2 border py-1.5 my-1 rounded-md w-full'/>
                        </div>
                        
                        {/* Submit */}
                        <button className='p-2 my-4 text-sm border border-[#0a474c] font-medium text-[#0a474c] mt-8 hover:text-white rounded-md hover:bg-[#0a474c]'>Update Password</button>
                    </div>
                </div>
              </div>  
          </div>
      </div>
  )
}

export default EditProfile
