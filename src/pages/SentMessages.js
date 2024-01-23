import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn'
import CreateGroupModal from '../components/CreateGroupModal'
import authService from '../service/authService'
import httpReq from '../service/httpReq'

const MessageDetails = () => {
    const[showSidebar,setShowSidebar]=useState(false);
    const [messages,setMesages]=useState([]);
    let user = authService.getUser();

    const getData = async()=>{
        try{
            let response = await httpReq.get(`/${user._id}/messages`);
            console.log(response);
            if(response.status===200){
                setMesages(response.data);
            }
           
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
     getData();
    },[])
   
   
  return (
      <div className="grid grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
        <div className={`lg:col-span-11 col-span-12 border ${showSidebar && 'hidden'} `}>
            <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
            />
              {/* Navbar */}
              <div className="flex  bg-white border shadow-md  justify-between p-3 lg:px-6">
                  <h3 className="text-xl">Sent Messages</h3>
                  <div className="hidden lg:block  justify-around gap-2">
                  </div>
              </div>
              <div className="bg-[#f7f7f7]  flex flex-col items-center     gap-4 w-full p-6 lg:px-32 ">
                  <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'> 
                      <table className='text-slate-500 w-full '>
                          <tr className='text border-y font-semibold  w-full text-sm my-2 font-serif flex lg:grid lg:grid-cols-6  py-3 '>
                              <td className='col-span-2 min-w-48'>TO</td>
                              <td className='col-span-2 min-w-48'>TEXT</td>
                              <td className='col-span-2 min-w-48'>STATUS</td>
                          </tr>
                          {messages && messages.length>0 && messages.map((a,ind)=>(
                            <tr key={ind} className='lg:grid lg:grid-cols-6 flex w-full my-2'>
                                <td className='col-span-2 min-w-48'>{a.contact}</td>
                                <td className='col-span-2 min-w-48'>{a.text}</td>
                                <td className='col-span-2 min-w-48'>{a.status}</td>
                            </tr>
                          ))}
                      </table>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default MessageDetails
