import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarCheck, faCalendarDay,faCalendarXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn'


const ScheduleMessage = () => {
  const[showSidebar,setShowSidebar]=useState(false);
    return (
        <div className="grid grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
          <div className={`lg:ms-24 lg:relative col-span-12 border ${showSidebar && 'hidden'}`}>
            <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
            />
            {/* Navbar */}
            <div className="flex  bg-white border shadow-md  justify-between p-3 lg:px-6">
                <h3 className="text-xl"> Schedule Messages</h3>
                <div className="hidden lg:block  justify-around gap-2">  
                </div>
            </div>
            {/* Container */}
            <div className="bg-[#f7f7f7]  flex flex-col items-center    gap-4 w-full p-6 lg:px-32 ">
              <div className='flex text-[#0a474c] flex-row w-full gap-10 justify-end  my-5'>
                  
                  <Link to='/create-schedule' className=' mx-5 rounded-md border border-[#0a474c] p-2 hover:bg-[#0a474c] hover:text-white'>
                    <FontAwesomeIcon className='mx-1 ' icon={faCalendar} />
                    <span className='text-sm '>Create Schedule</span>
                  </Link>
            
              </div>
              <div className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                {/* Total Schedules */}
                <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                    <div className='flex justify-between '>
                      <h4 className='font-bold text-2xl'>0</h4>
                      <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                        <FontAwesomeIcon 
                        className='text-white text-lg translate-y-2' icon={faCalendarDay} />
                      </div>
                    </div>
                    
                    <h5 className='text-gray-500 font-thin my-4'>Total Schedules</h5>
                </div>
                {/* Total Pending Schedules */}
                <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                    <div className='flex justify-between '>
                      <h4 className='font-bold text-2xl'>0</h4>
                      <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                        <FontAwesomeIcon 
                          className='text-white text-lg translate-y-2' 
                          icon={faSpinner} />
                      </div>
                    </div>
                    
                    <h5 className='text-gray-500 font-thin my-4'>
                    Total Pending Schedules</h5>
                </div>
                {/* Schedules Executed */}
                <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                    <div className='flex justify-between '>
                      <h4 className='font-bold text-2xl'>0</h4>
                      <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                        <FontAwesomeIcon 
                          className='text-white text-lg translate-y-2' 
                          icon={faCalendarCheck} />
                      </div>
                    </div>
                    <h5 className='text-gray-500 font-thin my-4'>
                    Schedules Executed</h5>
                </div>
                {/* Failed Schedules */}
                <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                    <div className='flex justify-between '>
                      <h4 className='font-bold text-2xl'>0</h4>
                      <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                        <FontAwesomeIcon 
                          className='text-white text-lg translate-y-2' 
                          icon={faCalendarXmark} />
                      </div>
                    </div>
                    <h5 className='text-gray-500 font-thin my-4'>
                    Failed Schedules </h5>
                </div>
              </div>
              {/* chedules */}
              <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                <h5 className='text-lg my-2'>Schedules</h5>
                <table className='text-slate-500 w-full '>
                  <hr/>
                  <tr className='text w-full my-2 text-xs font-serif flex lg:grid lg:grid-cols-12   '>
                    <td className='col-span-2  min-w-48'>SEND FROM</td>
                    <td className='col-span-2 min-w-48'>TITLE</td>
                    <td className='col-span-2 min-w-48'>MESSAGE TYPE</td>
                    <td className='col-span-2 min-w-48'>STATUS</td>
                    <td className='col-span-2 min-w-48'>DELIVERY DATE</td>      
                    <td className='col-span-2 min-w-48'>ACTION</td>      
                  </tr>
                  <hr/>
                </table>
              </div>
            </div>
            </div>
        </div>
      )
}

export default ScheduleMessage
