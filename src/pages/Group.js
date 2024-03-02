import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBarsProgress, faClipboardList, faFile, faLayerGroup, faMagnifyingGlass, faPenToSquare, faRocket, faTrash, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons'
import Sidebtn from '../components/Sidebtn'
import CreateGroupModal from '../components/CreateGroupModal'
import authService from '../service/authService'
import httpReq from '../service/httpReq'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import Pagination from '../components/Pagination';
import NavMenu from '../components/NavMenu';

const Group = ({show,onShow,onClose,lgScreen}) => {
    
    const [showModal,setShowModal] = useState(false);
    const [groups,setGroups] = useState([]);
    let user = authService.getUser();
    const [showDelete,setShowDelete] = useState(false);
    const[ogData,setogData]=useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [itemsPerPage,setItemsPerPage] = useState(25);
    const totalPages = Math.ceil(groups.length / (+itemsPerPage));
    const startIndex = currentPage * (+itemsPerPage);
    const endIndex = Math.min(startIndex + (+itemsPerPage), groups.length);
    let paginatedData = groups.slice(startIndex, endIndex);
    const entriesArr = [25,50,100];     

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
    const getData = async()=>{
        try{
            let response = await httpReq.get(`/groups/${user._id}`);
            //console.log(response.data);
            if(response.status===200){
                setGroups(response.data);
                setogData(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getData();
       },[showModal]);;
    const delGroup = async(url)=>{
        try{
            let response = await httpReq.deleteApi(url);
            //console.log(response);
            if(response.status===200){
                alert(response.data.message);
                setShowDelete(false);
                getData();
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleRemove = ()=>{
        delGroup(`/groups/${showDelete}`);
      } 
    const handleDelete = (id)=>{
        //console.log(id);
        setShowDelete(id);
        //delGroup(`/groups/${id}`);
    }
    const handleEdit = (id)=>{

    }
    const handleSearch = (e) => {
        const inputValue = e.target.value.trim(); 
        if (inputValue === '') {
            setGroups(ogData); 
        } else {
            const filtered = ogData.filter((a) => {
                return a.name.toLowerCase().includes(inputValue.toLowerCase());
            });
            setGroups(filtered);
        }
      // console.log(ogData);
      }
  return (
      <div className="grid grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
        <div className={`lg:ms-60 lg:relative col-span-12 border ${show && 'hidden'} ${showModal && ' opacity-15 '}`}>
                <NavMenu
                    onShow={onShow}
                    page={'Groups'}
                />
              <div className="bg-[#f7f7f7]  flex flex-col items-center     gap-4 w-full p-6 lg:px-10 ">
                  {/* Nav Buttons */}
                  <div className='flex w-full gap-4 justify-end pe-16 my-4'>
                      
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
                  <div className='flex flex-col mt-4 lg:px-8 lg:flex-row w-full lg:justify-between lg:gap-2 gap-6'>
                    <div className=' rounded-lg max-w-2/3 '>
                        <input
                            type='text'
                            placeholder='Search by name '
                            className=' border px-8  rounded-lg focus:border-0 text-gray-500 focus:bg-white min-w-80 bg-[#f7f7f7] placeholder:tracking-tight py-2  '
                            onChange={handleSearch}
                        />
                        <button >
                        <FontAwesomeIcon 
                        className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                        icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div
                          className='text-[#0a474c] flex flex-row  '>
                          {/* My Groups*/}
                          
                          <button onClick={()=>setShowModal(true)} 
                              className='bg-white  p-2 text-center text-sm text-gray-500 font-medium hover:bg-[#0a474c] hover:text-white border border-gray-400 rounded-lg'>

                              Create Group
                          </button>
                          <Link to='/contacts'   
                              className='bg-white mx-2 p-2 text-center text-sm text-gray-500 font-medium hover:bg-[#0a474c] hover:text-white border border-gray-400 rounded-lg'>
                                Contact List
                          </Link>
                          <div>
                            <select
                                className='bg-white px-2 text-sm p-2 text-center text-gray-500 font-medium border border-gray-400 rounded-lg focus:border-none '
                                value={itemsPerPage}
                                onChange={(e)=>setItemsPerPage(e.target.value)}
                            >
                                {entriesArr.map((a)=>(
                                    <option key={a} value={a}>{a} per page</option>
                                ))}
                            </select>
                         </div>
                      </div>
                  </div>
                  {/* <div className=' my-5 min-h-96  bg-white rounded-md shadow-md w-full overflow-scroll'>
                      
                      <table className=' w-full '>
                          <tr className='text font-bold text-center w-full text-sm font-serif flex lg:grid lg:grid-cols-6   '>
                              <td className='col-span-2 min-w-48 border-r py-3'>GROUP NAME</td>
                              <td className='col-span-2 min-w-48 py-3 border-r'>TOTAL MEMBERS</td>
                              <td className='col-span-2 min-w-48 py-3 border-r'>ACTION</td>
                          </tr>
                          {paginatedData.length>0 && paginatedData.map((a,ind)=>(
                            <tr key={ind} className='text   w-full text-sm text-center flex lg:grid lg:grid-cols-6 font-semibold  '>
                              <td className='col-span-2 p-1.5 border min-w-48'>{a.name && a.name}</td>
                              <td className='col-span-2 border p-1.5 min-w-48'>{a.members && a.members.length}</td>
                              <td className='col-span-2 border p-1.5 min-w-48'>
                                <button onClick={()=>handleEdit(a._id)} className='mx-2'>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                                <button onClick={()=>handleDelete(a._id)} className='mx-2'>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                              </td>
                          </tr>
                          ))}
                      </table>
                  </div> */}
                  <div className=' mb-4 border overflow-scroll   bg-white   rounded-lg shadow-sm '>
            <table className=' '>
                <tr className='bg-white font-serif text-center uppercase border  flex font-medium text-slate-900 text-sm'>
                    <td className=' min-w-48 border-r  col-span-2 py-3 font-serif '>
                        {/* <input
                            type='checkbox'
                            className='rounded-md border-2 w-6 h-4 translate-y-1 mx-2 border-gray-800 bg-[#0a474c] checked:bg-[#0a474c]'
                        />
                        Name */} Group Name
                        <button >
                       
                        </button>
                    </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>
                        Total members
                        <button >
                        
                        </button>
                     </td>
                    
                    <td className=' min-w-48 border-r  col-span-2 py-3'>Action</td>               
          
                </tr>
                {/* Contacts Data */}
                <div className='min-h-80 font-sans max-h-[400px]'>
                      {paginatedData.length>0 &&  paginatedData.map((a,ind)=>{
                      
                        return (
                        <>
                        <tr key={ind} className='bg-white w-full flex   font-normal text-slate-900'>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.name} </td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.members && a.members.length}</td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>
                              <button onClick={()=>handleEdit(a._id)} className='mx-2'>
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </button>
                              <button onClick={()=>handleDelete(a._id)} className='mx-2'>
                                <FontAwesomeIcon icon={faTrashCan} />
                              </button>
                                
                          </td>
                        </tr>
                        </>
                      )})}
                </div>
            </table>     
          </div>
                  <div className='w-full justify-stretch'>
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalPages={totalPages}
                        handleChange={(e)=>setItemsPerPage(e.target.value)}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />
                  </div>
              </div>
          </div>
          {/* Import Contacts Modal */}
         {showModal && (
                        <CreateGroupModal
                            onClose={()=>setShowModal(false)}
                            open={showModal}
                        />
              
        )}
        <Dialog
        open={showDelete}
        onClose={()=>setShowDelete(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this Group?"}
        </DialogTitle>
        <DialogActions>
          <Button className='' onClick={()=>handleRemove()}>Yes</Button>
          <Button className='text-gray-600' onClick={()=>setShowDelete(false)} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  )
}

export default Group
