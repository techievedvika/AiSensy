import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarDays, faPaperPlane, faRocket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn'

const BulkMessages = () => {
  const[showSidebar,setShowSidebar]=useState(false);
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
        <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
        />
         <div className={`lg:col-span-11 col-span-12  ${showSidebar && 'hidden'}`}>
        <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
          />
        {/* Navbar */}
        <div className="flex  bg-white border shadow-md  justify-between p-3 lg:px-6">
            <h3 className="text-xl"> Bulk Messages</h3>
            <div className="hidden lg:block  justify-around gap-2">  
            </div>
        </div>
        {/* Messages */}
        <div className="bg-[#f7f7f7]  flex flex-col items-center    gap-4 w-full p-6 lg:px-32 ">
          <div className='flex text-[#0a474c] flex-row w-full gap-10  justify-between my-5'>
              <Link to='/create-bulk-message' className='hover:underline'>
                <FontAwesomeIcon className='mx-1 ' icon={faPaperPlane} />
                <span className='text-sm '>Send Bulk Message</span>
              </Link>
              <Link to='/' className='hover:underline mx-5'>
                <FontAwesomeIcon className='mx-1 ' icon={faPaperPlane} />
                <span className='text-sm '>Send Bulk Message With Template</span>
              </Link>
        
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
            {/* Total Messages Sent */}
            <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                <div className='flex justify-between '>
                  <h4 className='font-bold text-2xl'>0</h4>
                  <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                    <FontAwesomeIcon className='text-white text-lg translate-y-2' icon={faRocket} />
                  </div>
                </div>
                
                <h5 className='text-gray-500 font-thin my-4'>Total Messages Sent</h5>
            </div>
            {/* Last 30 days Messages */}
            <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                <div className='flex justify-between '>
                  <h4 className='font-bold text-2xl'>0</h4>
                  <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                    <FontAwesomeIcon 
                      className='text-white text-lg translate-y-2' 
                      icon={faCalendarDays} />
                  </div>
                </div>
                
                <h5 className='text-gray-500 font-thin my-4'>
                Last 30 days Messages</h5>
            </div>
            {/* Today's Transaction */}
            <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                <div className='flex justify-between '>
                  <h4 className='font-bold text-2xl'>0</h4>
                  <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                    <FontAwesomeIcon 
                      className='text-white text-lg translate-y-2' 
                      icon={faCalendar} />
                  </div>
                </div>
                
                <h5 className='text-gray-500 font-thin my-4'>
                Today's Transaction</h5>
            </div>
          </div>
          {/* Transcation History */}
          <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
            <h5 className='text-lg my-2'>Transaction History</h5>
            <table className='text-slate-500 w-full '>
              <hr/>
              <tr className='text w-full my-2 font-serif flex lg:grid lg:grid-cols-10   '>
                <td className='col-span-2 min-w-48'>Message From</td>
                <td className='col-span-2 min-w-48'>Message To</td>
                <td className='col-span-2 min-w-48'>Message Type</td>
                <td className='col-span-2 min-w-48'>Template Name</td>
                <td className='col-span-2 min-w-48'>Requested at</td>      
              </tr>
              <hr/>
            </table>
          </div>
        </div>
        </div>
    </div>
  )
}

export default BulkMessages
