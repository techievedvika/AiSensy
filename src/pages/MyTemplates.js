import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBarsProgress, faChevronDown, faClipboardList, faFile, faLayerGroup, faMagnifyingGlass, faPenToSquare, faPlus, faRocket, faSort, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import AddRecordModal from '../components/AddRecordModal'
import ContactListModal from '../components/ContactListModal'
import ImportContactsModal from '../components/ImportContactsModal'
import { faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons'
import Sidebtn from '../components/Sidebtn'
import { useEffect } from 'react'
import authService from '../service/authService'
import httpReq from '../service/httpReq';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import ExportCSV from '../components/ExportCSV'
import Pagination from '../components/Pagination'
import NavMenu from '../components/NavMenu'


const MyTemplates = ({show,onShow,onClose,lgScreen}) => {
   
    const [data,setData]=useState([]);
    const[ogData,setogData]=useState([]);
    const user = authService.getUser();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const[confirmDel,setConfirmDel]=useState(false);
    const [delId,setDelId]=useState('');
    const entriesArr = [25,50,100];
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
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const removeData =async(url)=>{
        try{
            let response = await httpReq.deleteApi(`/template/${delId}`);
            console.log(response);
            if(response.status===201){
                setConfirmDel(false);
                fetchData();
            }
        }catch(err){
            console.log(err)
        }
    }
    const handleDelete =async(id)=>{
        if(id){
            setDelId(id);
            handleClose();
            setConfirmDel(true);
        }
    }
    const fetchData = async()=>{
        try{
            const response = await httpReq.get(`/user/${user._id}/templates`);
            //console.log(response);
            if(response.status===200){
                setData(response.data);
                setogData(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleSearch = (e) => {
        const inputValue = e.target.value.trim(); 
        let val = inputValue.toLowerCase();
        if (inputValue === '') {
            setData(ogData); 
        } else {
            const filtered = ogData.filter((a) => {
                return a.name.toLowerCase().includes(val) || a.text.toLowerCase().includes(val) || a.type.toLowerCase().includes(val);
            });
            setData(filtered);
        }
    }
    const sortBy = (str)=>{
        let sortedData = [...data];
        sortedData.sort((a, b) => a[str].localeCompare(b[str]));
        setData(sortedData);
        setCurrentPage(0);
    }
    useEffect(()=>{
        fetchData();
    },[]);
  return (
      <div className="grid grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
        <div className={`lg:ms-60 lg:relative col-span-12 border ${show && 'hidden'}`}>
                <NavMenu
                    onShow={onShow}
                    page={'Templates'}
                />
              <div className="bg-[#f7f7f7]  flex flex-col items-center     gap-4 w-full p-6 lg:px-32 ">
                  {/* Nav Buttons */}
                  <div className='flex w-full gap-4 justify-end pe-16 my-4'>
                      
                  </div>
                  <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
                      {/* Total Templates */}
                      <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                          <div className='flex justify-between gap-10'>
                              <h4 className='font-bold text-2xl mx-5'>{data.length}</h4>
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
                              <h4 className='font-bold text-2xl'>{data.length}</h4>
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
                  <div className="p-6  pt-6 w-full flex  gap-3 lg:gap-1 flex-row justify-between  ">
                            <div>
                                <input
                                    type='text'
                                    placeholder='Search by name, text or type'
                                    className='rounded border px-3 focus:border-none text-gray-500 focus:bg-white min-w-[300px]  placeholder:tracking-tight py-2 bg-[#f0f0f0] '
                                    onChange={handleSearch}
                                />
                                <button >
                                <FontAwesomeIcon 
                                className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                                icon={faMagnifyingGlass} />
                                </button>
                            </div>
                            <div className='flex gap-2'>
                                <div
                                    className='text-[#0a474c] flex justify-end lg:gap-2 gap-1'>
                                    {/* Create Template */}
                                    <Link to='create-template'>
                                        <button  className='border border-gray-400 py-1 bg-white   text-lg font-semibold hover:bg-[#0a474c] hover:text-white rounded-md text-center '
                                        >
                                            <FontAwesomeIcon className='text-end text-lg px-2' icon={faPlus} />
                                        </button>
                                    </Link>
                                    
                                </div>
                                <ExportCSV
                                    data={data}
                                />
                                <select
                                    className='bg-white px-2 p-1 text-sm text-center text-gray-500 font-medium border border-gray-400 rounded-lg focus:border-none '
                                    value={itemsPerPage}
                                    onChange={(e)=>setItemsPerPage(e.target.value)}
                                >
                                    {entriesArr.map((a)=>(
                                        <option key={a} value={a}>{a} per page</option>
                                    ))}
                                </select>
                            </div>
                   </div>
                  {/* <div className='px-8 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                      
                      <table className='text-slate-500 w-full '>
                       
                          <tr className='text py-2 w-full text-xs my-2 font-serif flex lg:grid lg:grid-cols-10   '>
                              <td className='col-span-2 min-w-48'>TEMPLATE NAME</td>
                              <td className='col-span-2 min-w-48'>TYPE</td>
                              <td className='col-span-2 min-w-48'>TEXT</td>
                              <td className='col-span-2 min-w-48'>STATUS</td>
                              <td className='col-span-2 min-w-48'>ACTION</td>
                          </tr>
                          {paginatedData.length>0 && paginatedData.map((a,ind)=>(
                            <tr 
                                className='text border- py-2 w-full text-sm  font-serif flex lg:grid lg:grid-cols-10 '
                                key={ind}
                            >
                            <td className='col-span-2 min-w-48'>{a.name}</td>
                              <td className='col-span-2 min-w-48'>{a.type}</td>
                              <td className='col-span-2 min-w-48'>{a.text}</td>
                              <td className='col-span-2 min-w-48'>{a.status}</td>
                              <td className='col-span-2 text-sm min-w-48'>
                                <button
                                    id="basic-button"
                                    className='text-xs border p-1 font-semibold rounded-lg px-1.5'
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                Action
                                <FontAwesomeIcon className='ps-1 text-xs' icon={faChevronDown}/>
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
                                    <MenuItem className=' text-xs hover:text-[#0a474c]' onClick={handleClose}>
                                        <Link to={`/template/edit/${a._id}`} className='text- '>Edit</Link>
                                    </MenuItem>
                                    <MenuItem className=' hover:text-[#0a474c]' onClick={()=>handleDelete(a._id)}>Delete</MenuItem>
                                </Menu>
                              </td>
                            </tr>
                          ))}
                      </table>
                  </div> */}
                  <div className=' mb-4 border overflow-scroll   bg-white   rounded-lg shadow-sm '>
            <table className=' '>
                <tr className='bg-white font-sans text-center uppercase border  flex font-medium text-slate-900 text-sm'>
                    <td className=' min-w-48 border-r  col-span-2 py-3 font-serif '>
                        {/* <input
                            type='checkbox'
                            className='rounded-md border-2 w-6 h-4 translate-y-1 mx-2 border-gray-800 bg-[#0a474c] checked:bg-[#0a474c]'
                        />
                        Name */} Template
                        <button onClick={()=>sortBy('name')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                    </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>
                        Type
                        <button onClick={()=>sortBy('type')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                     </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>Text
                    <button onClick={()=>sortBy('text')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                    </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>
                        Status
                        <button onClick={()=>sortBy('status')}>
                            <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
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
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.name} </td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.type}</td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.text}</td>
                          <td
                           
                            className='col-span-2 hover:whitespace-normal hover:z-1 border p-1.5 text-center w-48 text-sm truncate'
                          >
                            {a?.status }
                          </td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>
                              <button  className='mx-2'>
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
                  <div className=' w-full justify-stretch'>
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

                <Dialog
                    open={confirmDel}
                    onClose={()=>setConfirmDel(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this Template?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button className='' onClick={()=>removeData()}>Yes</Button>
                        <Button className='text-gray-600' onClick={()=>setConfirmDel(false)} autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
          </div>
        
      </div>
  )
}

export default MyTemplates
