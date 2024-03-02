import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBarsProgress, faChevronDown, faClipboardList, faFile, faLayerGroup, faMagnifyingGlass, faRocket, faSort } from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommonsSa } from '@fortawesome/free-brands-svg-icons'
import Sidebtn from '../components/Sidebtn'
import { useEffect } from 'react'
import authService from '../service/authService'
import httpReq from '../service/httpReq';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogContentText, TextField } from '@mui/material'
import ExportCSV from '../components/ExportCSV'
import Pagination from '../components/Pagination'
import NavMenu from '../components/NavMenu'

const HelpSupport = ({show,onShow,onClose,lgScreen}) => {
    const[showSidebar,setShowSidebar]=useState(false);
    const [data,setData]=useState([]);
    const user = authService.getUser();
    const[form,setForm]=useState({user:user._id,subject:'',message:''})
    const entriesArr = [25,50,100];
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
    const fetchData = async()=>{
        try{
            const response = await httpReq.get(`/user/${user._id}/tickets`);
            //console.log(response);
            if(response.status===200){
                setData(response.data);
                setogData(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
     fetchData();
    },[form]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleChange =(e)=>{
        let{name,value}=e.target;
        let f1 = {...form};
        f1[name]=value;
        setForm(f1);
    }
    const postData = async(url,obj)=>{
        try{
            let response = await httpReq.post(url,obj);
            handleClose();
            setForm({user:user._id,subject:'',message:''});
            //console.log(response.data);
        }catch(err){
            console.log(err);
        }
    }
    const handleSubmit = ()=>{
        postData(`/user/ticket`,form);
    }
    const handleSearch = (e) => {
        const inputValue = e.target.value.trim().toLowerCase(); 
        if (inputValue === '') {
            setData(ogData); 
        } else {
            const filtered = ogData.filter((item) => {
                return item.subject.toLowerCase().includes(inputValue) || item.message.includes(inputValue);
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
  return (
      <div className="grid grid-flow-row-dense grid-cols-12 w-full ">
          <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
           <div className={` lg:relative lg:ms-60 col-span-12 border ${show && 'hidden'}`}>
                <NavMenu
                    onShow={onShow}
                    page={'Support Tickets'}
                />
              <div className="bg-[#f7f7f7]  flex flex-col items-center     gap-4 w-full p-6 lg:px-10 ">
                  {/* Nav Buttons */}
                  <div className='flex flex-col lg:flex-row w-full gap-4 justify-between pe-16 my-4'>
                        <div>
                            <input
                                type='text'
                                placeholder='Search by subject or message'
                                className='rounded border px-3 focus:border-none text-gray-500 focus:bg-white min-w-80  placeholder:tracking-tight py-2 bg-[#f0f0f0] '
                                onChange={handleSearch}
                            />
                            <button >
                            <FontAwesomeIcon 
                            className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                            icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        <div className='flex '>
                            <button onClick={handleClickOpen}  
                              className='border mx-1.5 bg-white border-gray-400 text-sm px-1.5 text-gray-500 py-0.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                              <span className='text-lg font-bold'>+</span>
                              New Ticket
                            </button>
                            <div>
                                <select
                                    className='bg-white px-2 mx-2 p-2 text-sm text-center text-gray-500 font-medium border border-gray-400 rounded-lg focus:border-none '
                                    value={itemsPerPage}
                                    onChange={(e)=>setItemsPerPage(e.target.value)}
                                >
                                    {entriesArr.map((a)=>(
                                        <option key={a} value={a}>{a} per page</option>
                                    ))}
                                </select>
                            </div>
                            <ExportCSV data={data}/>
                        </div>
                  </div>
                  
                  {/* <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                      
                      <table className='text-slate-500 w-full '>
                       
                          <tr className='text border-y py-2 w-full text-sm uppercase my-2 font-serif flex lg:grid lg:grid-cols-10   '>
                              <td className='col-span-2 min-w-48'>subject</td>
                              <td className='col-span-2 min-w-48'>message</td>
                              <td className='col-span-2 min-w-48'>STATUS</td>
                              <td className='col-span-2 min-w-48'>created at</td>
                              <td className='col-span-2 min-w-48'>updated at</td>
                          </tr>
                          {data.length>0 && data.map((a,ind)=>(
                            <tr 
                                className='text w-full  my-4 font-sans flex lg:grid lg:grid-cols-10 text-slate-500'
                                key={ind}
                            >
                            <td className='col-span-2 min-w-48'>{a.subject}</td>
                              <td className='col-span-2 min-w-48'>{a.message}</td>
                              <td className='col-span-2 min-w-48'>{a.status}</td>
                              <td className='col-span-2 text-sm min-w-48'>{a.createdAt}</td>
                              <td className='col-span-2 text-sm min-w-48'>{a.updatedAt}</td>
                            </tr>
                          ))}
                         
                      </table>
                  </div> */}
                  <div className=' mb-4 border overflow-x-scroll  bg-white   rounded-lg shadow-sm '>
            <table className=' overflow-scroll'>
                <tr className='bg-white font-sans text-center uppercase border  flex font-medium text-slate-900 text-sm'>
                    <td className=' min-w-48 border-r  col-span-2 py-3 font-serif '>
                                    {/* <input
                                        type='checkbox'
                                        className='rounded-md border-2 w-6 h-4 translate-y-1 mx-2 border-gray-800 bg-[#0a474c] checked:bg-[#0a474c]'
                                    />
                                    Name */} subject
                                    <button onClick={()=>sortBy('subject')}>
                                    <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                                    </button>
                                </td>
                                <td className=' min-w-48 border-r  col-span-2 py-3'>
                                    message
                                    <button onClick={()=>sortBy('message')}>
                                    <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                                    </button>
                                </td>
                                <td className=' min-w-48 border-r  col-span-2 py-3'>Status
                                <button onClick={()=>sortBy('status')}>
                                    <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                                    </button>
                                </td>
                                <td className=' min-w-48 border-r  col-span-2 py-3'>created at</td>               
                                <td className=' min-w-48 border-r  col-span-2 py-3'>updated at</td>               
                    
                            </tr>
                            <div className='min-h-80 font-sans max-h-[400px]'>
                                {paginatedData.length>0 &&  paginatedData.map((a,ind)=>{
                                
                                    return (
                                    <>
                                    <tr key={ind} className='bg-white w-full flex   font-normal text-slate-900'>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.subject} </td>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.message}</td>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.status}</td>
                                    <td
                                      
                                        className='col-span-2 hover:whitespace-normal hover:z-1 border p-1.5 text-center w-48 text-sm truncate'
                                    >
                                        {a?.createdAt} 
                                    </td>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.updatedAt}</td>
                                    </tr>
                                    </>
                                )})}
                            </div>
                        </table>
                    </div>
                    <div className='w-full'>
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
        <Dialog
            open={open}
            className='p-4'
            onClose={handleClose}
        >
        <DialogTitle>Create a New Ticket</DialogTitle>
        <DialogContent >
        <DialogContentText className='text-center '>
         
          </DialogContentText>
        <div className='flex flex-col my-4 mx-8'>
            <label>Subject*</label>
            <input
                name='subject'
                value={form.subject}
                onChange={handleChange}
                className='border-b border-gray-500 min-w-72 py-1.5'
            />
        </div>
        <div className='flex flex-col  gap-5 my-4 mx-8'>
            <label>Message*</label>
            <textarea
                name='message'
                value={form.message}
                onChange={handleChange} 
                rows={5} 
                className='border border-gray-500 min-w-72 py-1.5 rounded-md'>
            </textarea>
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={()=>handleSubmit()}>CREATE</Button>
        </DialogActions>
      </Dialog>
        
      </div>
  )
}

export default HelpSupport
