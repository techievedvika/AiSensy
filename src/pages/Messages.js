import React, { useState } from 'react'
import Sidebar from '../components/SidebarLg'
import BtnGroup from '../components/BtnGroup'
import ListMsg from '../components/ListMsg'

const Messages = () => {
  const[msgType,setMsgType]=useState('plain')
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>
      <div className="lg:col-span-11 col-span-12  ">
        {/* Navbar */}
        <div className="flex bg-white border shadow-md  justify-between p-3 lg:px-6">
          <h3 className="text-xl"> Custom Messages</h3>
          <div className="hidden lg:block  justify-around gap-2">  
          </div>
        </div>
        {/* Messages */}
        <div className="bg-[#f7f7f7]  flex justify-center h-full  gap-4 w-full p-6 lg:px-32 ">
        <div className='bg-white lg:grid grid-cols-7 gap-8  rounded-md shadow-lg border  w-full mb-12 p-5 px-8'>
            <div className='lg:col-span-2 flex flex-row lg:flex-col gap-3   p-4 px-8 '>
              <button onClick={()=>setMsgType('plain')}  className={`${msgType==='plain' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>Plain Text</button>
              <button onClick={()=>setMsgType('with media')}  className={`${msgType==='with media' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md  text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>Text With Media</button>
              <button onClick={()=>setMsgType('with button')}  className={`${msgType==='with button' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md  text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>Message With Button</button>
              <button onClick={()=>setMsgType('list')}  className={`${msgType==='list' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md  text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>List Message</button>
              <button onClick={()=>setMsgType('location')}  className={`${msgType==='location' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md  text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>Send Location</button>
            </div>
            <div className='lg:col-span-5   p-4'>
              <div className='grid grid-cols-2'>
                    <div>
                      <select className='border border-gray-500 rounded-md p-2'>
                        <option value=''>Select Device</option>
                      </select>
                    </div>
                    <div>
                      <label className='text-gray-500 lg:mx-2'>Send to :</label>
                      <input
                        type='number'
                        placeholder='Enter Mobile Number'
                        className='border-b p-2 text-sm lg:text-base  border-gray-500'
                      />
                    </div>
              </div>
              {/* Plain Message */}
              {msgType==='plain' && (
                <>
                  
                  <div className='flex justify-center my-4'>
                    <textarea
                    placeholder='type your message here...'
                    className='border rounded w-full p-3 '
                    cols={60}
                    rows={8}
                    ></textarea>
                  </div>
                  <div className='flex justify-end'>
                    <button className='rounded-md p-2 px-3 hover:opacity-80 text-white bg-[#0a474c] '>Send</button>
                  </div>
                </>
              )}
              {/* Message With Media */}
              {msgType==='with media' && (
                <>
                  <div className='my-4'>
                  <label className='text-gray-500 mx-2'>Select File</label>
                  <br/>
                  <input
                    type='file'
                    className='my-2 text-sm'
                  />
                  </div>
                  <div className='flex justify-center my-4'>
                    <textarea
                    placeholder='type your message here...'
                    className='border  rounded w-full p-3 '
                    cols={60}
                    rows={8}
                    ></textarea>
                  </div>
                  <div className='flex justify-end'>
                    <button className='rounded-md p-2 px-3 hover:opacity-80 text-white bg-[#0a474c] '>Send</button>
                  </div>
                </>
              )}
              {/* Message with button */}
              {msgType==='with button' && (
                <>
                  <div className='flex justify-center my-4'>
                    <textarea
                    placeholder='type your message here...'
                    className='border  rounded w-full p-3 '
                    cols={60}
                    rows={8}
                    ></textarea>
                  </div>
                  <div className='  my-4'>
                    <label className='text-gray-500 text-start mx-2'>Footer Text</label>
                    <input
                      className='w-full my-2 border py-1.5 rounded-md bg-slate-50'
                    />
                  </div>
                  <div className='my-4'>
                      <BtnGroup/>
                  </div>
                  <div className='flex justify-end'>
                    <button className='rounded-md p-2 px-3 hover:opacity-80 text-white bg-[#0a474c] '>Send</button>
                  </div>
                </>
              )}
              {/* List Message */}
              {msgType==='list' && (
                <>
                  <div className='flex justify-center my-4'>
                    <textarea
                    placeholder='type your message here...'
                    className='border  rounded w-full p-3 '
                    cols={60}
                    rows={8}
                    ></textarea>
                  </div>
                  <ListMsg/>
                  <div className='flex justify-end'>
                    <button className='rounded-md p-2 px-3 hover:opacity-80 text-white bg-[#0a474c] '>Send</button>
                  </div>
                </>
              )}
              {/* Location */}
              {msgType==='location' && (
                <>
                  <div className='grid grid-cols-12 gap-12 my-4'>
                    <div className='col-span-5'>
                        <label className='text-gray-500 text-start mx-2'>Latitude</label>
                        <input
                          placeholder=''
                          type='number'
                          className='w-full my-2 border  py-1.5 rounded-sm bg-slate-50'
                        />
                    </div>
                    <div className='col-span-5'>
                        <label className='text-gray-500 text-start mx-2'>Longitude</label>
                        <input
                          placeholder=''
                          type='number'
                          className='w-full my-2 border py-1.5 rounded-sm bg-slate-50'
                        />
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <button className='rounded-md p-2 px-3 hover:opacity-80 text-white bg-[#0a474c] '>Send</button>
                  </div>
                </>
              )}
            </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Messages
