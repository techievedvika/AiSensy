import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClipboardList, faFile, faRocket } from '@fortawesome/free-solid-svg-icons'
import AddRecordModal from '../components/AddRecordModal'
import ContactListModal from '../components/ContactListModal'
import ImportContactsModal from '../components/ImportContactsModal'
import Sidebtn from '../components/Sidebtn'
import NavMenu from '../components/NavMenu'
import authService from '../service/authService'
import httpReq from '../service/httpReq'
import Pagination from '../components/Pagination'

const CreateBulkMsg = ({show,onShow,onClose,lgScreen}) => {
    const[showAddRcrd,setShowAddRcrd]=useState(false);
    const[showContactList,setShowContactList]=useState(false);
    const[showImportContact,setShowImportContacts]=useState(false);
    
    const[contacts,setContacts]=useState([]);
    const[rcd,setRcd]=useState({receivers:[],msg:''});
    const[entries,setEntries]=useState([]);

    const user=authService.getUser();
    const [ogData,setogData] = useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [itemsPerPage,setItemsPerPage] = useState(25);
    const totalPages = Math.ceil(entries.length / (+itemsPerPage));
    const startIndex = currentPage * (+itemsPerPage);
    const endIndex = Math.min(startIndex + (+itemsPerPage), entries.length);
    let paginatedData = entries.slice(startIndex, endIndex);
    

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };
    const fetchContacts = async()=>{
        try{
            let response = await httpReq.get(`/user/${user._id}/contacts`);
            //console.log(response);
            if(response.status===200){
                setContacts(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    const postData = async(url,data)=>{
        try{
            let response = await httpReq.post(url,data);
            if(response.status===200){
                console.log(response);
                setEntries([]);
                authService.saveMsgs([]);
            }
        }catch(err){
            console.log(err);
        }
    }
    const fetchData = async()=>{
        try{
            let response = await httpReq.get(`/bulkmessages/${user._id}`);
            if(response.status===200){
                let arr = [];
                response.data.forEach((item)=>{
                    if(item.status==='pending'){
                        arr.push(item);
                    }
                });
                setEntries(arr);
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleChange = (e)=>{
        let record = {...rcd};
        let{name,value}=e.target;
        if(name==='receivers'){
            if(e.target.checked){
                record.receivers.push(value);
              
            }else{
                let findVal = record.receivers.findIndex((a)=>a===value);
                record.receivers.splice(findVal,1);
            }
        }else{
            record[name]=value;
        }
        setRcd(record);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(rcd.msg && rcd.receivers.length>0){
            let entry = {...rcd,sender:user._id,status:'pending'};
            const updatedEntries = [...entries,entry];
            setEntries(updatedEntries);
            authService.saveMsgs(updatedEntries);
            setRcd({receivers:[],msg:''});
        }
        console.log(entries);
    }
    const sendData = ()=>{
        console.log(entries);
        if(entries.length>0){
            postData('/bulkmessages',{msgs:entries});
        }else{
            alert('Please enter some records to send');
        }
    }
    useEffect(()=>{
        fetchContacts();
        let arr = authService.getMsgs();
        setEntries(arr);
    },[]);

    const handleShow = ()=>{
        setShowAddRcrd(false);
    }
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
        <Sidebar 
               show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
        <div className={`lg:relative lg:ms-60 col-span-12 ${(showAddRcrd || showContactList ||showImportContact) ? ' opacity-50 bg-[#f0f0f0]':''} ${show && 'hidden'}`}>
        <NavMenu
            onShow={onShow}
            page={'Add Bulk Message'}
          />
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
                        {/* <button 
                              onClick={()=>setShowContactList(true)}
                            className='border mx-1.5 border-black text-sm px-1.5 py-0.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                            <span className='text-lg font-bold'>+</span>
                            Contact List
                        </button> */}
                        {/* Import Contacts */}
                       
                        
                    </div>
                </div>
                {/* <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                    <div className='flex justify-between my-3'>
                        <h5>0/0</h5>
                        <button 
                            onClick={()=>sendData()}
                            className='border mx-1.5  text-sm px-1.5 py-0.5 font- bg-[#0a474c] hover:bg-teal-950 text-white rounded-md '>
                            <span className='text-lg mx-1  '>
                                <FontAwesomeIcon className='translate-y-px' icon={faRocket} />
                            </span>
                            Send Now
                        </button>
                    </div>
                    <table className='text-slate-500 w-full '>
                        <hr/>
                        <tr className='text w-full text-xs my-2 font-serif flex lg:grid lg:grid-cols-8   '>
                            <td className='col-span-2 min-w-48'>RECEIVER (TO)</td>
                           
                            <td className='col-span-4 min-w-48'>MESSAGE</td>
                            <td className='col-span-2 min-w-48'>STATUS</td>
                        </tr>
                        <hr/>
                        {entries.length>0 && entries.map((a,ind)=>(
                            <tr 
                            key={ind}
                            className='text w-full text-xs my-2 font-serif flex lg:grid lg:grid-cols-8   '
                            >
                                 <td className='col-span-2 min-w-48'>{a.receivers.map((b)=>b).join(',')}</td>
                              
                                <td className='col-span-4 min-w-48'>{a.msg}</td>
                                <td className='col-span-2 min-w-48'>{a.status}</td>
                            </tr>
                        ))}
                    </table>
                </div> */}
                <div className=' mb-4 px-10 w-full border overflow-scroll   bg-white   rounded-lg shadow-sm '>
                        <div className='flex px-8 py-5 justify-between my-3'>
                            <h5></h5>
                            <button 
                                onClick={()=>sendData()}
                                className='border mx-1.5  text-sm px-1.5 py-0.5 font- bg-[#0a474c] hover:bg-teal-950 text-white rounded-md '>
                                <span className='text-lg mx-1  '>
                                    <FontAwesomeIcon className='translate-y-px' icon={faRocket} />
                                </span>
                                Send Now
                            </button>
                        </div>
                        <table className='w-full '>
                            <tr className='bg-white w-full font-sans text-center uppercase border  flex font-medium text-slate-900 text-sm'>
                                <td className=' min-w-48 border-r  col-span-2 py-3 font-serif '>
                                    {/* <input
                                        type='checkbox'
                                        className='rounded-md border-2 w-6 h-4 translate-y-1 mx-2 border-gray-800 bg-[#0a474c] checked:bg-[#0a474c]'
                                    />
                                    Name */} To
                                    <button >
                                
                                    </button>
                                </td>
                                <td className=' min-w-48 border-r  col-span-2 py-3'>
                                    Text
                                    <button >
                                    
                                    </button>
                                </td>
                                
                                <td className=' min-w-48 border-r  col-span-2 py-3'>status</td>               
                    
                            </tr>
                            {/* Contacts Data */}
                            <div className='min-h-80 font-sans max-h-[400px]'>
                                {paginatedData.length>0 &&  paginatedData.map((a,ind)=>{
                                
                                    return (
                                    <>
                                    <tr key={ind} className='bg-white w-full flex   font-normal text-slate-900'>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.receivers.map((b)=>b).join(',')} </td>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.msg} </td>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.status} </td>
                                    
                                    </tr>
                                    </>
                                )})}
                            </div>
                        </table>     
                  </div>
                <div className='w-full lg:px-32'>
            
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
         {/* Add Record Modal */}
         {showAddRcrd && (
                        <AddRecordModal
                            onClose={handleShow}
                            open={showAddRcrd}
                            onChange={handleChange}
                            contacts={contacts}
                            onSubmit={handleSubmit}
                            rcd={rcd}
                        />
                  
        )}
        
    </div>
  )
}

export default CreateBulkMsg
