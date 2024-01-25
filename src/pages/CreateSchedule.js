import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn'

const CreateSchedule = () => {
    const[showSidebar,setShowSidebar]=useState(false);
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
       <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
        />
        <div className={`lg:ms-24 lg:relative col-span-12  ${showSidebar && 'hidden'}`}>
          <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
          />
            {/* Navbar */}
            <div className="flex  bg-white border shadow-md  justify-between p-3 lg:px-6">
                <h3 className="text-xl"> Create Schedule</h3>
                
            </div>
            <div className="bg-[#f7f7f7]  flex flex-col items-center    gap-4 w-full p-6 lg:px-32 ">
                {/* Nav Buttons */}
                <div className='flex w-full gap-4 ms-10 my-3'>
                    <Link to='/schedulemessage' >
                        <FontAwesomeIcon className='text-[#0a474c] text-2xl' icon={faArrowLeft} />
                    </Link>
                    
                </div>
                {/* Schedule Form */}
                <div className='bg-white rounded-md shadow-md w-5/6 lg:w-2/3 p-6'>
                    <form>
                        {/* Schedule Name */}
                        <div className='my-2'>
                            <label className='text-gray-500 text-sm font-medium my-2'>Schedule Name</label>
                            <input placeholder='Enter Schedule Name' type='text' className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'/>
                        </div>
                        <div className='flex my-2 gap-8'>
                            {/* Number */}
                            <div className='w-full'>
                                <label className='text-gray-500 my-2 font-medium text-sm'>Select Number</label>
                                <select className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'>
                                </select>
                            </div>
                            {/* Receiver Group */}
                            <div className='w-full'>
                                <label className='text-gray-500 my-2 font-medium text-sm'>Receiver Group</label>
                                <select className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'>
                                </select>
                            </div>
                        </div>
                        <div className='flex my-2 gap-8'>
                            {/* Delivery date time */}
                            <div className='w-full'>
                                <label className='text-gray-500 my-2 font-medium text-sm'>Delivery Date and Time</label>
                                <input type='date' className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'/>
                            </div>
                            {/* Messaging type */}
                            <div className='w-full'>
                                <label className='text-gray-500 my-2 font-medium text-sm'>Messaging Type</label>
                                <select className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'>
                                </select>
                            </div>
                        </div>
                        {/* Timezone */}
                        <div className='my-2'>
                            <label className='text-gray-500 my-2 font-medium text-sm'>Select Timezone</label>
                            <select className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'>
                            </select>
                        </div>
                        {/* Message */}
                        <div className='my-2'>
                            <label className='text-gray-500 my-2 font-medium text-sm'>Message</label>
                           
                            <textarea 
                            rows={6}
                                className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'
                            >
                            </textarea>
                        </div>
                        {/* Submit */}
                        <button className='border rounded-md p-2 text-[#0a474c] border-[#0a474c] text-sm my-4 hover:text-white hover:bg-[#0a474c]'>Create Schedule</button>
                    </form>
                </div>
            </div>
        </div>
         
    </div>
  )
}

export default CreateSchedule
