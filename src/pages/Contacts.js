import React, { useState } from 'react'
import Sidebar from '../components/SidebarLg'
import { faBars, faBookOpen, faCircleExclamation, faMagnifyingGlass, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import FilterForm from '../components/FilterForm'

const Contacts = () => {
    const[searchText,setSearchText]=useState('');
    const [action,setAction]=useState('');
    const[entries,setEntries]=useState('25 per page');
    const[showModal,setShowModal]=useState(false);
    const actions=['Export','Import History','Manage Tags','block & Opt','Edit Contact'];
    const entriesArr = ['25 per page','50 per page','100 per page'];
    return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>
      <div className="lg:col-span-11 col-span-12  ">
        {/* NAVBAR */}
        <div className="flex bg-white border shadow-md  justify-between p-3 lg:px-6">
          <h3 className="text-xl">Contacts</h3>
          <div className="hidden lg:block  justify-around gap-2">
            <span className="text-xs text-gray-500 mx-2">
              Template Messaging Tier
              <FontAwesomeIcon
                className="mx-1"
                icon={faCircleExclamation}
                style={{ color: "#d7dae0" }}
              />
            </span>
            <span className="mx-2">
              Tier 0 <span className="text-sm">(2/24 Hours)</span>
            </span>
            <span className="text-xs text-gray-500 mx-2">
              Remaining Quota
              <FontAwesomeIcon
                className="mx-1"
                icon={faCircleExclamation}
                style={{ color: "#d7dae0" }}
              />
            </span>
            <span>2</span>
          </div>
        </div>
        <div className="bg-[#f7f7f7] flex justify-center flex-col gap-4 w-full py-6 lg:px-32 ">
          {/* Quick Guide */}
          <div className="bg-white border shadow-md rounded-md p-6 py-6 w-full">
            <h5>Quick Guide</h5>
            <h6 className="text-gray-500  my-2">
              Import contact, create audience & launch campaign, all from one
              place.
            </h6>
            <Link to="" className=" my-2 mt-4 text-[#0a474c] flex">
              <FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen} />
              <h5 className=" hover:underline">
                Import upto 2 lakh contacts in one go
              </h5>
            </Link>
            <button className="p-2 my-3 text-[#0a474c] hover:bg-[#f0f0f0] rounded-lg">
                    <FontAwesomeIcon icon={faPlay} /> Watch Tutorial
            </button>
          </div>
          {/* Search and Filter */}
          <div className="p-6 py-6 w-full flex flex-col gap-3 lg:gap-1 lg:flex-row justify-between">
            <div className='flex'>
                {/* Searchbar */}
                <div>
                    <input
                        type='text'
                        value={searchText}
                        placeholder='Search name or mobile number'
                        className='rounded border-none px-3 focus:border-none text-gray-500 focus:bg-white min-w-60  placeholder:text-sm placeholder:tracking-tight py-1.5 bg-[#f0f0f0]'
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <FontAwesomeIcon 
                    className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                    icon={faMagnifyingGlass} />
                </div>
                {/* Filter Modal Toggle */}
                <button onClick={()=>setShowModal(true)} className='bg-white px-3 py-2 text-[#0a474c] rounded-sm hover:bg-[#f0f0f0]'>
                    <FontAwesomeIcon className='px-3' icon={faBars} />
                    Filter
                </button>
            </div>
            <div className='flex gap-2'>
                {/* Broadcast */}
                <button className='bg-[#d9d9d9] rounded-md  text-gray-600 text-sm p-1.5 opacity-65' disabled>BROADCAST</button>
                {/* Add Contact */}
                <button className='border border-gray-400 text-gray-700 text-sm p-2 rounded-lg px-3 opacity-65'>+ Add Contact</button>
                {/* Import */}
                <select 
                    disabled
                    className='bg-[#f7f7f7] p-2 text-center text-sm disabled:text-gray-600 opacity-65 border border-gray-400 rounded-lg text-gray-600'
                >
                    <option>Import</option>
                </select>
                {/* Actions */}
                <select
                    onChange={(e)=>setAction(e.target.value)}
                    className='border text-[#0a474c] hover:bg-[#edf0f0] border-[#809fa1] hover:border-[#0a474c] py-1 text-center text-sm rounded-lg'
                >
                    <option>Actions</option>
                    {actions.map((a)=>(
                        <option>{a}</option>
                    ))}
                </select>
            </div>
          </div>
          {/* Filter Modal */}
          {showModal && (
            <div className='w-full relative  '>
            <div className='absolute w-5/6  overflow-scroll overflow-x-hidden lg:w-4/5 border max-h-96  rounded-lg mix-blend-normal shadow-3xl bg-white  p-5 px-8 bottom-1 left-8   '>
              <div className='flex justify-end'>
                <button className=' px-3 rounded-lg text-gray-800  font-semibold py-1 text-2xl' onClick={()=>setShowModal(false)}>X</button>
              </div>
              <div className=' '>
                <FilterForm/>
              </div>
            </div>
            </div>
          )}
          
          {/* Contacts Container */}
          <div className='w-full mb-4 border border-gray-400 overflow-scroll  rounded-lg shadow-sm '>
            <table className=''>
                <tr className='bg-white w-full px-6 py-3 flex font-normal text-slate-900'>
                    <td className=' min-w-48 '>
                        <input
                            type='checkbox'
                            className='rounded-md border-2 w-6 h-4 translate-y-1 mx-2 border-gray-800 bg-[#0a474c] checked:bg-[#0a474c]'
                        />
                        Name
                    </td>
                    <td className=' min-w-48 '>Mobile Number</td>
                    <td className=' min-w-48'>Tags</td>
                    <td className=' min-w-48'>Source</td>
                    <td className=' min-w-48'>Status</td>
                    <td className=' min-w-48'>State</td>
                    <td className=' min-w-48'>Intervened By</td>
                    <td className=' min-w-48'>Last Active</td>
                    <td className=' min-w-48'>Created At</td>
                    <td className=' min-w-48'>First Message</td>
                    <td className=' min-w-48'>Incoming</td>
                    <td className=' min-w-48'>Opted In</td>
                    <td className=' min-w-48'>MAU Status</td>
                    <td className=' min-w-48'>WA Conversation Status</td>
                    
                </tr>
                {/* Contacts Data */}
                <div className='min-h-60'>

                </div>
            </table>
          </div>
          {/* Footer */}
        </div>
          <div className='border  m-0 py-4  bg-white shadow-lg flex justify-center'>
            <div className='flex gap-4'>
                <div>
                    <button className='text-gray-500 font-semibold text-lg'>{`<`}</button>
                    <span className='mx-3'>1-0 of 0</span>
                    <button className='text-gray-500 font-semibold text-lg'>{`>`}</button>
                </div>
                {/* Number of Entries */}
                <div>
                    <select
                        className='text-gray-500 text-sm border-none focus:border-none selection:bg-[#f7f7f7]'
                        value={entries}
                        onChange={(e)=>setEntries(e.target.value)}
                    >
                        {entriesArr.map((a)=>(
                            <option value={a}>{a}</option>
                        ))}
                    </select>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Contacts
