import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClipboardList, faFile, faRocket } from '@fortawesome/free-solid-svg-icons'
import AddRecordModal from '../components/AddRecordModal'
import ContactListModal from '../components/ContactListModal'
import ImportContactsModal from '../components/ImportContactsModal'
import Sidebtn from '../components/Sidebtn'

const CreateBulkMsg = () => {
    const[showSidebar,setShowSidebar]=useState(false);
    const[showAddRcrd,setShowAddRcrd]=useState(false);
    const[showContactList,setShowContactList]=useState(false);
    const[showImportContact,setShowImportContacts]=useState(false);
    const handleShow = ()=>{
        setShowAddRcrd(false);
    }
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
        <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
        <div className={`lg:col-span-11 col-span-12 ${(showAddRcrd || showContactList ||showImportContact) ? ' opacity-50 bg-[#f0f0f0]':''} ${showSidebar && 'hidden'}`}>
            <Sidebtn
                onShow={()=>setShowSidebar(!showSidebar)}
            />
            {/* Navbar */}
            <div className="flex  bg-white border shadow-md  justify-between p-3 lg:px-6">
                <h3 className="text-xl"> Bulk Messages</h3>
                <div className="hidden lg:block  justify-around gap-2">  
                </div>
            </div>
            <div className="bg-[#f7f7f7]  flex flex-col items-center    gap-4 w-full p-6 lg:px-32 ">
                {/* Nav Buttons */}
                <div className='flex w-full gap-4 flex-col lg:flex-row lg:justify-between'>
                    <Link to='/bulkmessages' >
                        <FontAwesomeIcon className='text-[#0a474c] text-xl' icon={faArrowLeft} />
                    </Link>
                    <div 
                        className='text-[#0a474c] flex lg:gap-2 gap-1'>
                         {/* Add Record */}
                        <button 
                            onClick={()=>setShowAddRcrd(true)}
                            className='border mx-1.5 border-black text-sm px-1.5 py-0.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                            <span className='text-lg font-bold'>+</span>
                            Add record
                        </button>
                        {/* Contact list */}
                        <button 
                              onClick={()=>setShowContactList(true)}
                            className='border mx-1.5 border-black text-sm px-1.5 py-0.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                            <span className='text-lg font-bold'>+</span>
                            Contact List
                        </button>
                        {/* Import Contacts */}
                        <button 
                            onClick={()=>setShowImportContacts(true)}
                            className='border mx-1.5 border-black text-sm px-1.5 py-0.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                            <span className='text-lg mx-1 font-bold'>
                                <FontAwesomeIcon icon={faFile} />
                            </span>
                            Import Contacts From CSV
                        </button>
                        
                    </div>
                </div>
                <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                    <div className='flex justify-between my-3'>
                        <h5>0/0</h5>
                        <button 
                            className='border mx-1.5  text-sm px-1.5 py-0.5 font- bg-[#0a474c] hover:bg-teal-950 text-white rounded-md '>
                            <span className='text-lg mx-1  '>
                                <FontAwesomeIcon className='translate-y-px' icon={faRocket} />
                            </span>
                            Send Now
                        </button>
                    </div>
                    <table className='text-slate-500 w-full '>
                        <hr/>
                        <tr className='text w-full text-xs my-2 font-serif flex lg:grid lg:grid-cols-10   '>
                            <td className='col-span-2 min-w-48'>RECEIVER (TO)</td>
                            <td className='col-span-2 min-w-48'>DEVICE (FROM)</td>
                            <td className='col-span-4 min-w-48'>MESSAGE</td>
                            <td className='col-span-2 min-w-48'>STATUS</td>
                        </tr>
                        <hr/>
                    </table>
                </div>
            </div>
        </div>
         {/* Add Record Modal */}
         {showAddRcrd && (
                    <div className='relative col-span-12'>
                        <AddRecordModal
                            onClose={handleShow}
                        />
                    </div>
        )}
        {/* Contact list Modal */}
         {showContactList && (
                    <div className='relative col-span-12'>
                        <ContactListModal
                            onClose={()=>setShowContactList(false)}
                        />
                    </div>
        )}
        {/* Import Contacts Modal */}
         {showImportContact && (
                    <div className='relative col-span-12'>
                        <ImportContactsModal
                            onClose={()=>setShowImportContacts(false)}
                        />
                    </div>
        )}
    </div>
  )
}

export default CreateBulkMsg
