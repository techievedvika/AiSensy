import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { faBars, faBookOpen, faChevronCircleDown, faCircleExclamation, faMagnifyingGlass, faPlay, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import FilterForm from '../components/FilterForm'
import Sidebtn from '../components/Sidebtn'
import ContactForm from '../components/ContactForm'
import authService from '../service/authService'
import httpReq from '../service/httpReq'
// import Button from 'react-bootstrap/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Contacts = () => {
    const[searchText,setSearchText]=useState('');
    const [action,setAction]=useState('');
    const[entries,setEntries]=useState('25 per page');
    const[showModal,setShowModal]=useState(false);
    const [showFormModal,setShowFormModal] = useState(false);
    const[showSidebar,setShowSidebar]=useState(false);
    const[showAModal,setShowAModal] =useState('')
    const[data,setData]=useState([]);
    const[edit,setEdit]=useState('');
    const[contactAction,setcAction]=useState('');
    const [showDeleteM,setShowDeleteM]=useState(false);
    const [confirmDelete,setConfirmDelete] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const actions=['Export','Import History','Manage Tags','block & Opt','Edit Contact'];
    const entriesArr = ['25 per page','50 per page','100 per page'];
    const user = authService.getUser();
    //fetch contacts Data
    const fetchData =async()=>{
      try{
        let response=await httpReq.get(`/user/${user._id}/contacts`);
        //console.log(response.data);
        if(response.status===200){
          setData(response.data);
        }
      }catch(err){
        console.log(err);
        
      }
    }
    useEffect(()=>{
      fetchData();
      if(!showFormModal){
        setEdit('');
        
      }
      if(showFormModal){
        setShowAModal('');
      }
      
    },[ showFormModal, edit]);
    //Search Contacts by name or mobile number
    const handleSearch = ()=>{
      let contacts = [...data];
      let c1 = contacts.filter((a)=>{
        if(a.name.includes(searchText) || (a.mobile.includes(searchText))){
          return a;
        }
        return;
      });
      setData(c1);
    }
    //Remove a contact
    const removeData = async(url)=>{
      try{
        let response = await httpReq.deleteApi(url);
        console.log(response);
        if(response.status===200){
          setShowDeleteM(false);
          fetchData();
        }
      }catch(err){
        console.log(err)
      }
    }
    //Edit a Contact
    const handleEdit =(id)=>{
      setEdit(id);
      handleClose();
      setShowFormModal(true);
    }
      //Delete a Contact
    const handleDelete = (id)=>{
      //console.log(id);
      setShowDeleteM(id);
      handleClose();
    }
    const handleRemove = ()=>{
      removeData(`/contact/${showDeleteM}`);
    }  
    const handleAction = (id)=>{
      if(id===showAModal){
        setShowAModal('');
      }else{
        setShowAModal(id);
      }
    }
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
    <div className="grid grid-flow-row-dense grid-cols-12 w-full ">
            <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
      <div className={`lg:col-span-11 col-span-12 ${(showModal || showFormModal) && ' opacity-15'}  ${showSidebar && 'hidden'}`}>
          <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
          />
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
                    <button onClick={()=>handleSearch()}>
                      <FontAwesomeIcon 
                      className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                      icon={faMagnifyingGlass} />
                    </button>
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
                <button onClick={()=>setShowFormModal(true)} className='border border-gray-400 text-gray-700 text-sm p-2 rounded-lg px-3 opacity-65'>+ Add Contact</button>
                {/* Import */}
                <Link to ='/group' 
                    className='bg-white p-2 text-center text-sm text-gray-500 font-medium hover:bg-[#0a474c] hover:text-white border border-gray-400 rounded-lg'
                >
                   Contact Groups
                </Link>
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
          
          {/* Contacts Container */}
          <div className=' mb-4 border  overflow-scroll  border-gray-400 bg-white   rounded-lg shadow-sm '>
            <table className=''>
                <tr className='bg-white  px-6 py-3 grid grid-cols-10 font-medium text-slate-900 f'>
                    <td className=' min-w-48 col-span-2 py-3'>
                        <input
                            type='checkbox'
                            className='rounded-md border-2 w-6 h-4 translate-y-1 mx-2 border-gray-800 bg-[#0a474c] checked:bg-[#0a474c]'
                        />
                        Name
                    </td>
                    <td className=' min-w-48 col-span-2 py-3'>Mobile Number</td>
                    <td className=' min-w-48 col-span-2 py-3'>Status</td>
                    <td className=' min-w-48 col-span-2 py-3'>Groups</td>               
                    <td className=' min-w-48 col-span-2 py-3'>Action</td>               
          
                </tr>
                {/* Contacts Data */}
                <div className='min-h-60'>
                      {data.length>0 && data.map((a,ind)=>(
                        <>

                        <tr key={ind} className='bg-white w-full grid grid-cols-10 px-6 py-3  font-normal text-slate-900'>
                          <td className='col-span-2 min-w-48'>{a.name}</td>
                          <td className='col-span-2 min-w-48'>{a.mobile}</td>
                          <td className='col-span-2 min-w-48'>{a.status}</td>
                          <td className='col-span-2 min-w-48'></td>
                          <td className='col-span-2 min-w-48'>
                               
                                <button
                                    id="basic-button"
                                    className='text-xs border p-1 font-semibold rounded-lg px-1.5'
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                Action
                                <FontAwesomeIcon className='ps-1 text-xs' icon={faChevronCircleDown}/>
                                </button>
                                <Menu
                                    // id="basic-menu"
                                    className='text-sm'
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem className=' text-xs hover:text-[#0a474c]' onClick={()=>handleEdit(a._id)}>
                                        Edit
                                    </MenuItem>
                                    <MenuItem className=' hover:text-[#0a474c]' onClick={()=>handleDelete(a._id)}>Delete</MenuItem>
                                </Menu>
                             
                          </td>
                        </tr>
                        </>
                      ))}
                </div>
            </table>
          </div>
        
          </div> 
          {/* Footer */} 
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
      {/* Filter Modal */}
      {showModal && (
            <div className=' relative  '>
              <div className='absolute   border rounded-lg mix-blend-normal shadow-3xl bg-white border-gray-300 shadow-lg  p-8 pt-16 px-16 bottom-72 lg:bottom-60 left-24 lg:left-72  min-w-[500px] '>
              <div className='flex w-full justify-end '>
                <button onClick={()=>setShowModal(false)}  className='text-3xl text-gray-800 hover:text-gray-600 me-4'>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
                <div className=' '>
                  <FilterForm/>
                </div>
              </div>
            </div>
        )}
        {/* Contact form Modal */}
        {showFormModal && (
          <div className='relative col-span-12'>
            <ContactForm
              onClose={()=>setShowFormModal(false)}
              editId = {edit}
            />
          </div>
        )}
        
      <Dialog
        open={showDeleteM}
        onClose={()=>setShowDeleteM(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this Contact?"}
        </DialogTitle>
        <DialogActions>
          <Button className='' onClick={()=>handleRemove()}>Yes</Button>
          <Button className='text-gray-600' onClick={()=>setShowDeleteM(false)} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
   
  );
}

export default Contacts
