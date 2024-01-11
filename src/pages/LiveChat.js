import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Sidebtn from '../components/Sidebtn'

const LiveChat = () => {
    const[cType,setCtype]=useState('active');
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
            {/* nav Area */}
            <div className='flex gap-3 p-5 py-8'>
                {/* Searchbar */}
                <div className='w-full'>
                    <input 
                        placeholder='Search name or mobile number'
                        className='w-2/3 py-2 px-5 border rounded-md bg-[#f7f7f7]  text-sm' />
                    <button className='h-7 -translate-x-10  w-7 rounded-full bg-[#d6ede9] text-center'>
                        <FontAwesomeIcon className='text-sm' icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
            <div className='mt-10 bg-[#0a474c] flex lg:justify-between px-8 py-3 w-full'>
                {/* chat Type */}
                <div className='text-white font-medium flex lg:gap-8 gap-16 text-xs tracking-wide leading-loose '>
                    <button>ACTIVE(0)</button>
                    <button>REQUESTING(0)</button>
                    <button>INTERVENED(0)</button>
                </div>
                <div className='font-medium text-white hidden lg:block'>
                    Chat Profile
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveChat
