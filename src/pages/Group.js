import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBarsProgress, faClipboardList, faFile, faLayerGroup, faRocket, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons'
import Sidebtn from '../components/Sidebtn'
import CreateGroupModal from '../components/CreateGroupModal'
import authService from '../service/authService'
import httpReq from '../service/httpReq'

const Group = () => {
    const[showSidebar,setShowSidebar]=useState(false);
    const [showModal,setShowModal] = useState(false);
    const [groups,setGroups] = useState([]);
    let user = authService.getUser();

    const getData = async()=>{
        try{
            let response = await httpReq.get(`/groups/${user._id}`);
            console.log(response.data);
            setGroups(response.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getData();
    },[]);
    const delGroup = async(url)=>{
        try{
            let response = await httpReq.deleteApi(url);
            console.log(response);
            if(response.status===200){
                alert(response.data.message);
                getData()
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleDelete = (id)=>{
        console.log(id);
        delGroup(`/groups/${id}`);
    }
  return (
      <div className="grid grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
        <div className={`lg:col-span-11 col-span-12 border ${showSidebar && 'hidden'} ${showModal && ' opacity-15 '}`}>
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
                          {/* My Groups*/}
                          
                          <button onClick={()=>setShowModal(true)} 
                              className='border mx-1.5 border-black text-sm px-1.5 py-0.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                              <span className='text-lg font-bold'>+</span>
                              Create Group
                          </button>
                          <Link to='/contacts'   
                              className='border mx-1.5 border-black text-sm px-1.5 py-1.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md text-center '>
                                Contact List
                          </Link>
                          
                      </div>
                  </div>
                  <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
                      {/* Total Groups */}
                      <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                          <div className='flex justify-between gap-10'>
                              <h4 className='font-bold text-2xl mx-5'>0</h4>
                              <div className='bg-[#0a474c] ms-5 rounded-full h-10 w-10 text-center'>
                                  <FontAwesomeIcon 
                                  className='text-white text-lg translate-y-2' 
                                  icon={faLayerGroup} />
                              </div>
                          </div>
                          <h5 className='text-gray-500 font-thin my-4'>Total Groups</h5>
                      </div>
                      {/* Active Groups */}
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
                              Active Groups</h5>
                      </div>
                      {/* Inactive Groups */}
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
                              Inactive Groups</h5>
                      </div>
                  </div>
                  <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                      
                      <table className='text-slate-500 w-full '>
                          <tr className='text border-y  w-full text-xs my-2 font-serif flex lg:grid lg:grid-cols-6  py-3 '>
                              <td className='col-span-2 min-w-48'>GROUP NAME</td>
                              <td className='col-span-2 min-w-48'>TOTAL MEMBERS</td>
                              <td className='col-span-2 min-w-48'>ACTION</td>
                          </tr>
                          {groups.length>0 && groups.map((a,ind)=>(
                            <tr key={ind} className='text   w-full text-sm my-2  flex lg:grid lg:grid-cols-6 font-semibold  '>
                              <td className='col-span-2  min-w-48'>{a.name && a.name}</td>
                              <td className='col-span-2 min-w-48'>{a.members && a.members.length}</td>
                              <td className='col-span-2 min-w-48'>
                                <button
                                    onClick={()=>handleDelete(a._id)} 
                                    className='  px-2 rounded-md hover:opacity-45 transform duration-150 hover:translate-y-px text-red-800 text-lg font-bold'>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </td>
                          </tr>
                          ))}
                      </table>
                  </div>
              </div>
          </div>
          {/* Import Contacts Modal */}
         {showModal && (
                    <div className='relative col-span-12'>
                        <CreateGroupModal
                            onClose={()=>setShowModal(false)}
                        />
                    </div>
        )}
        
      </div>
  )
}

export default Group
