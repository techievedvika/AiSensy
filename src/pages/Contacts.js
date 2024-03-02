import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { faBars, faBookOpen, faChevronCircleDown, faCircleExclamation, faMagnifyingGlass, faPenToSquare, faPlay, faPlus, faSort, faTrash, faTrashCan, faUserGroup, faXmark } from '@fortawesome/free-solid-svg-icons'
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

import ExportCSV from '../components/ExportCSV'
import Pagination from '../components/Pagination'
import NavMenu from '../components/NavMenu'

const Contacts = (props) => {
    let {show,onShow,onClose,lgScreen} = props;
    const [action,setAction]=useState('');
    const[showModal,setShowModal]=useState(false);
    const [showFormModal,setShowFormModal] = useState(false);
    const[showAModal,setShowAModal] =useState('')
    const[data,setData]=useState([]);
    const[edit,setEdit]=useState('');
    const [showDeleteM,setShowDeleteM]=useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e,id) => {
        setAnchorEl(e.currentTarget);
        setAction(id);
    };
    const entriesArr = [25,50,100];
    const user = authService.getUser();
    const [ogData,setogData] = useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [itemsPerPage,setItemsPerPage] = useState(25);
    const totalPages = Math.ceil(data.length / (+itemsPerPage));
    const startIndex = currentPage * (+itemsPerPage);
    const endIndex = Math.min(startIndex + (+itemsPerPage), data.length);
    let paginatedData = data.slice(startIndex, endIndex);
     

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
    //fetch contacts Data
    const fetchData =async()=>{
      try{
        let response=await httpReq.get(`/user/${user?._id}/contacts`);
       
        if(response.status===200){
          setData(response.data);
          console.log(response.data);
          setogData(response.data);
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
      
    },[ startIndex,showFormModal, edit]);
    //Search Contacts by name or mobile number
    const handleSearch = (e) => {
      const inputValue = e.target.value.trim(); 
      if (inputValue === '') {
          setData(ogData); 
      } else {
          const filteredContacts = ogData.filter((contact) => {
              return contact.name.toLowerCase().includes(inputValue.toLowerCase()) || contact.mobile.includes(inputValue);
          });
          setData(filteredContacts);
      }
    }
    //Remove a contact
    const removeData = async(url)=>{
      try{
        let response = await httpReq.deleteApi(url);
        // console.log(response);
        if(response.status===200){
          setShowDeleteM(false);
          fetchData();
        }
      }catch(err){
        // console.log(err)
      }
    }
    //Edit a Contact
    const handleEdit =(id)=>{
       console.log(id);
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
    const handleClose = () => {
      setAnchorEl(null);
    };
    const sortBy = (str)=>{
      let sortedData = [...data];
      sortedData.sort((a, b) => a[str].localeCompare(b[str]));
      setData(sortedData);
      setCurrentPage(0);
    }
    //console.log('Total Pages',totalPages);
    //console.log('Current Pages',currentPage);
    return (
    <div className="grid grid-flow-row-dense grid-cols-12 w-full ">
            <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
      <div className={`lg:relative lg:ms-60 col-span-12 ${(showModal || showFormModal) && ' opacity-15'}  ${show && 'hidden'}`}>
          {/* <Sidebtn
            onShow={onShow}
          /> */}
          <NavMenu
            onShow={onShow}
            page={'Contacts'}
          />
        {/* NAVBAR */}
        {/* <div className="flex bg-white border shadow-md  justify-between py-3 lg:px-6">
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
        </div> */}
        <div className="bg-[#f7f7f7] flex justify-center flex-col gap-4 w-full py-6 lg:px-10 px-4">
          {/* Quick Guide */}
          {/* <div className="bg-white border shadow-md rounded-md p-6 py-6 w-full">
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
          </div> */}
          {/* Search and Filter */}
          <div className="p-6 py-6 w-full flex flex-col gap-3 lg:gap-1 lg:flex-row lg:justify-between justify-center ">
            <div className='flex'>
                {/* Searchbar */}
                <div>
                    <input
                        type='text'
                        placeholder='Search by name or mobile number'
                        className='rounded border px-3 focus:border-none text-gray-500 focus:bg-white min-w-80  placeholder:tracking-tight py-2 bg-[#f0f0f0] '
                        onChange={handleSearch}
                    />
                    <button >
                      <FontAwesomeIcon 
                      className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                      icon={faMagnifyingGlass} />
                    </button>
                </div>
                
            </div>
            <div className='flex gap-2'>

                {/* Add Contact */}
                <button onClick={()=>setShowFormModal(true)} className='bg-white px-2 p-1 text-center  text-gray-500 font-medium hover:bg-[#0a474c] hover:text-white border border-gray-400 rounded-lg'>
                <FontAwesomeIcon icon={faPlus} />
                </button>
                {/* Import */}
                <button  className='bg-white px-2 p-1 text-center text-gray-500 font-medium hover:bg-[#0a474c] hover:text-white border border-gray-400 rounded-lg'>
                  <Link to ='/group' 
                     
                  >
                    <FontAwesomeIcon icon={faUserGroup} />
                  </Link>
                </button>
                <ExportCSV
                  data={data}
                />
                <div>
                    <select
                        className='bg-white px-2 p-2 text-sm text-center text-gray-500 font-medium border border-gray-400 rounded-lg focus:border-none '
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
          
          {/* Contacts Container */}
          <div className=' mb-4 border overflow-scroll   bg-white   rounded-lg shadow-sm '>
            <table className=' '>
                <tr className='bg-white font-sans text-center uppercase border  flex font-medium text-slate-900 text-sm'>
                    <td className=' min-w-48 border-r  col-span-2 py-3 font-serif '>
                        {/* <input
                            type='checkbox'
                            className='rounded-md border-2 w-6 h-4 translate-y-1 mx-2 border-gray-800 bg-[#0a474c] checked:bg-[#0a474c]'
                        />
                        Name */} Name
                        <button onClick={()=>sortBy('name')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                    </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>
                        Mobile
                        <button onClick={()=>sortBy('mobile')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                     </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>Status
                    <button onClick={()=>sortBy('status')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                    </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>Groups</td>               
                    <td className=' min-w-48 border-r  col-span-2 py-3'>Action</td>               
          
                </tr>
                {/* Contacts Data */}
                <div className='min-h-80 font-sans max-h-[400px]'>
                      {paginatedData.length>0 &&  paginatedData.map((a,ind)=>{
                      
                        return (
                        <>
                        <tr key={ind} className='bg-white w-full flex   font-normal text-slate-900'>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.name} </td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.mobile}</td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.status}</td>
                          <td
                            title={a.groups.map((b) => b.name).join(', ')} 
                            className='col-span-2 hover:whitespace-normal hover:z-1 border p-1.5 text-center w-48 text-sm truncate'
                          >
                            {a.groups.map((b) => b.name).join(', ')} 
                          </td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>
                              <button onClick={()=>handleEdit(a._id)} className='mx-2'>
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </button>
                              <button onClick={()=>handleDelete(a._id)} className='mx-2'>
                                <FontAwesomeIcon icon={faTrashCan} />
                              </button>
                                {/* <button
                                    id="basic-button"
                                    className='text-xs border p-1 font-semibold rounded-lg px-1.5'
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={(e)=>handleClick(e,a._id)}
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
                                    <MenuItem className=' text-xs hover:text-[#0a474c]' onClick={()=>handleEdit(action)}>
                                        Edit 
                                    </MenuItem>
                                    <MenuItem className=' hover:text-[#0a474c]' onClick={()=>handleDelete(action)}>Delete</MenuItem>
                                </Menu> */}
                          </td>
                        </tr>
                        </>
                      )})}
                </div>
            </table>
          </div>
          <div>
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
          {/* Footer */} 
          <div className='border  m-0 py-4  bg-white shadow-lg flex justify-center'>
            <div className='flex gap-4'>
               
                
                
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
              open={showFormModal}
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
