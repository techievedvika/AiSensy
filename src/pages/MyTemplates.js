import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBarsProgress, faClipboardList, faFile, faLayerGroup, faRocket } from '@fortawesome/free-solid-svg-icons'
import AddRecordModal from '../components/AddRecordModal'
import ContactListModal from '../components/ContactListModal'
import ImportContactsModal from '../components/ImportContactsModal'
import { faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons'
import Sidebtn from '../components/Sidebtn'

const MyTemplates = () => {
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
                  <h3 className="text-xl"> My Templates</h3>
                  <div className="hidden lg:block  justify-around gap-2">
                  </div>
              </div>
              <div className="bg-[#f7f7f7]  flex flex-col items-center     gap-4 w-full p-6 lg:px-32 ">
                  {/* Nav Buttons */}
                  <div className='flex w-full gap-4 justify-end pe-16 my-4'>
                      <div
                          className='text-[#0a474c] flex justify-end lg:gap-2 gap-1'>
                          {/* Create Template */}
                          <Link to='create-template'   
                              className='border mx-1.5 border-black text-sm px-1.5 py-0.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                              <span className='text-lg font-bold'>+</span>
                              Create Template
                          </Link>
                          
                      </div>
                  </div>
                  <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
                      {/* Total Templates */}
                      <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                          <div className='flex justify-between gap-10'>
                              <h4 className='font-bold text-2xl mx-5'>1/20</h4>
                              <div className='bg-[#0a474c] ms-5 rounded-full h-10 w-10 text-center'>
                                  <FontAwesomeIcon 
                                  className='text-white text-lg translate-y-2' 
                                  icon={faLayerGroup} />
                              </div>
                          </div>
                          <h5 className='text-gray-500 font-thin my-4'>Total Templates</h5>
                      </div>
                      {/* Active Templates */}
                      <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                          <div className='flex justify-between '>
                              <h4 className='font-bold text-2xl'>0</h4>
                              <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                                  <FontAwesomeIcon
                                      className='text-white text-lg translate-y-2'
                                      icon={faCreativeCommonsSa} />
                              </div>
                          </div>

                          <h5 className='text-gray-500 font-thin my-4'>
                              Active Templates</h5>
                      </div>
                      {/* Inactive Templates */}
                      <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                          <div className='flex justify-between '>
                              <h4 className='font-bold text-2xl'>0</h4>
                              <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                                  <FontAwesomeIcon
                                      className='text-white text-lg translate-y-2'
                                      icon={faBarsProgress} />
                              </div>
                          </div>

                          <h5 className='text-gray-500 font-thin my-4'>
                              Inactive Templates</h5>
                      </div>
                  </div>
                  <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                      
                      <table className='text-slate-500 w-full '>
                          <hr />
                          <tr className='text w-full text-xs my-2 font-serif flex lg:grid lg:grid-cols-8   '>
                              <td className='col-span-2 min-w-48'>TEMPLATE NAME</td>
                              <td className='col-span-2 min-w-48'>TYPE</td>
                              <td className='col-span-2 min-w-48'>STATUS</td>
                              <td className='col-span-2 min-w-48'>ACTION</td>
                          </tr>
                          <hr />
                      </table>
                  </div>
              </div>
          </div>
        
      </div>
  )
}

export default MyTemplates
