import React from 'react'
import Sidebar from '../components/SidebarLg'

const BulkMessages = () => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
        <div className="hidden lg:block h-full">
        <Sidebar />
        </div>
        <div className="lg:col-span-11 col-span-12  ">
        {/* Navbar */}
        <div className="flex bg-white border shadow-md  justify-between p-3 lg:px-6">
            <h3 className="text-xl"> Bulk Messages</h3>
            <div className="hidden lg:block  justify-around gap-2">  
            </div>
        </div>
        {/* Messages */}
        <div className="bg-[#f7f7f7] h-full flex justify-center  gap-4 w-full p-6 lg:px-32 ">
        </div>
        </div>
    </div>
  )
}

export default BulkMessages
