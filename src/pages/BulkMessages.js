import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarDays, faMagnifyingGlass, faPaperPlane, faPlus, faRocket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn'
import Pagination from '../components/Pagination'
import NavMenu from '../components/NavMenu'
import authService from '../service/authService'
import httpReq from '../service/httpReq'

const BulkMessages = ({show,onShow,onClose,lgScreen}) => {

  const[data,setData]=useState([]);
  const entriesArr = [25,50,100];
   
    const [ogData,setogData] = useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [itemsPerPage,setItemsPerPage] = useState(25);
    const totalPages = Math.ceil(data.length / (+itemsPerPage));
    const startIndex = currentPage * (+itemsPerPage);
    const endIndex = Math.min(startIndex + (+itemsPerPage), data.length);
    let paginatedData = data.slice(startIndex, endIndex);
    const user = authService.getUser();

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const fetchData = async()=>{
    try{
        let response = await httpReq.get(`/bulkmessages/${user._id}`);
        console.log(response);
        if(response.status===200){
          console.log(response.data);
          setData(response.data);
          setogData(response.data);
        }
    }catch(err){
      console.log(err);
    }
  }
  const handleSearch = (e) => {
    const inputValue = e.target.value.trim().toLowerCase(); 
   
    if (inputValue === '') {
        setData(ogData); 
    } else {
        const filtered = ogData.filter((item) => {
          const receiverMatch = item.receivers.some((receiver) =>
          receiver.toLowerCase().includes(inputValue)
      );
   
      const msgMatch = item.msg.includes(inputValue);

      return receiverMatch || msgMatch;
        });
        setData(filtered);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
        <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
        />
         <div className={`lg:ms-60 lg:relative col-span-12  ${show && 'hidden'}`}>
         <NavMenu
            onShow={onShow}
            page={'Bulk Messages'}
          />
        {/* Messages */}
        <div className="bg-[#f7f7f7]  flex flex-col items-center    gap-4 w-full p-6 lg:px-32 ">
          
          <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
            {/* Total Messages Sent */}
            <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                <div className='flex justify-between '>
                  <h4 className='font-bold text-2xl'>0</h4>
                  <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                    <FontAwesomeIcon className='text-white text-lg translate-y-2' icon={faRocket} />
                  </div>
                </div>
                <h5 className='text-gray-500 font-thin my-4'>Total Messages Sent</h5>
            </div>
            {/* Last 30 days Messages */}
            <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                <div className='flex justify-between '>
                  <h4 className='font-bold text-2xl'>0</h4>
                  <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                    <FontAwesomeIcon 
                      className='text-white text-lg translate-y-2' 
                      icon={faCalendarDays} />
                  </div>
                </div>
                
                <h5 className='text-gray-500 font-thin my-4'>
                Last 30 days Messages</h5>
            </div>
            {/* Today's Transaction */}
            <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                <div className='flex justify-between '>
                  <h4 className='font-bold text-2xl'>0</h4>
                  <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                    <FontAwesomeIcon 
                      className='text-white text-lg translate-y-2' 
                      icon={faCalendar} />
                  </div>
                </div>
                
                <h5 className='text-gray-500 font-thin my-4'>
                Today's Transaction</h5>
            </div>
          </div>
          {/* Transcation History */}
          {/* <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
            <h5 className='text-lg my-2'>Transaction History</h5>
            <table className='text-slate-500 w-full '>
              <hr/>
              <tr className='text w-full my-2 font-serif flex lg:grid lg:grid-cols-10   '>
                <td className='col-span-2 min-w-48'>Message From</td>
                <td className='col-span-2 min-w-48'>Message To</td>
                <td className='col-span-2 min-w-48'>Message Type</td>
                <td className='col-span-2 min-w-48'>Template Name</td>
                <td className='col-span-2 min-w-48'>Requested at</td>      
              </tr>
              <hr/>
            </table>
          </div> */}
          <div className='w-full lg:px-24 mt-4 my-2 flex justify-between'>
              <div>
                    <input
                        type='text'
                        placeholder='Search by name or text'
                        className='rounded border px-3 focus:border-none text-gray-500 focus:bg-white min-w-80  placeholder:tracking-tight py-2 bg-[#f0f0f0] '
                        onChange={handleSearch}
                    />
                    <button >
                      <FontAwesomeIcon 
                      className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                      icon={faMagnifyingGlass} />
                    </button>
              </div>
              <div className='flex text-[#0a474c] flex-row gap-4  '>
                  <Link to='/create-bulk-message' className='border flex flex-row hover:underline'>
                    <button  className='bg-white px-2 p-1 text-center text-sm text-gray-500 font-medium hover:bg-[#0a474c] hover:text-white border border-gray-400 rounded-lg'>
                      <FontAwesomeIcon icon={faPaperPlane} /> Send
                    </button>
                  </Link>
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
          <div className=' mb-4 border overflow-scroll w-full mx-28   bg-white   rounded-lg shadow-sm '>
                        <table className='w-full '>
                            <tr className='bg-white font-sans w-full lg:grid lg:grid-cols-6 text-center uppercase border  flex font-medium text-slate-900 text-sm'>
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
                            <div className='min-h-80 font-sans max-h-[400px] w-full'>
                                {paginatedData.length>0 &&  paginatedData.map((a,ind)=>{
                                
                                    return (
                                    <>
                                    <tr key={ind} className='bg-white w-full flex lg:grid lg:grid-cols-6   font-normal text-slate-900'>
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
    </div>
  )
}

export default BulkMessages
