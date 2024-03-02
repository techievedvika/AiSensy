import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarCheck, faCalendarDay,faCalendarXmark, faMagnifyingGlass, faSort, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn'
import NavMenu from '../components/NavMenu'
import authService from '../service/authService'
import httpReq from '../service/httpReq'
import ExportCSV from '../components/ExportCSV'
import Pagination from '../components/Pagination'

const ScheduleMessage = ({show,onShow,onClose,lgScreen}) => {
    const[data,setData]=useState([]);
    const[ogData,setogData]=useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [itemsPerPage,setItemsPerPage] = useState(25);
    const totalPages = Math.ceil(data.length / (+itemsPerPage));
    const startIndex = currentPage * (+itemsPerPage);
    const endIndex = Math.min(startIndex + (+itemsPerPage), data.length);
    let paginatedData = data.slice(startIndex, endIndex);
    const entriesArr = [25,50,100];     
    const user = authService.getUser();
    const pendingSchedules = data.reduce((acc,curr)=>{
      if(curr.status==='pending'){
        return acc+1;
      }else{
        return acc;
      }
    },0);
    const executedSchedules = data.reduce((acc,curr)=>{
      if(curr.status==='sent'){
        return acc+1;
      }else{
        return acc;
      }
    },0);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const fetchData = async ()=>{
    try{
      let response = await httpReq.get(`/schedules/${user._id}`);
      console.log(response);
      if(response.status===200){
        
        setData(response.data);
        setogData(response.data);
      }
    }catch(err){
      console.log(err);
    }
  }
  const sortBy = (str)=>{
    let sortedData = [...data];
    sortedData.sort((a, b) => a[str].localeCompare(b[str]));
    setData(sortedData);
    setCurrentPage(0);
  }
  const handleSearch = (e) => {
    const inputValue = e.target.value.trim().toLowerCase(); 
    if (inputValue === '') {
        setData(ogData); 
    } else {
        const filtered = ogData.filter((item) => {
            return item.name.toLowerCase().includes(inputValue) || item.text.toLowerCase().includes(inputValue) || item.receiver.toLowerCase().includes(inputValue);
        });
        setData(filtered);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])

  
    return (
      <div className="grid grid-flow-row-dense grid-cols-12 w-full ">
          <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
          <div className={`lg:ms-60 lg:relative col-span-12 border ${show && 'hidden'}`}>
            <NavMenu
              onShow={onShow}
              page={'Schedule Messages'}
            />
            {/* Container */}
            <div className="bg-[#f7f7f7] flex justify-center flex-col gap-4 w-full py-6 lg:px-32 px-4">
              
              <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 mx-10 lg:mx-4'>
                {/* Total Schedules */}
                <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                    <div className='flex justify-between '>
                      <h4 className='font-bold text-2xl'>{data.length}</h4>
                      <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                        <FontAwesomeIcon 
                        className='text-white text-lg translate-y-2' icon={faCalendarDay} />
                      </div>
                    </div>
                    
                    <h5 className='text-gray-500 font-thin my-4'>Total Schedules</h5>
                </div>
                {/* Total Pending Schedules */}
                <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                    <div className='flex justify-between '>
                      <h4 className='font-bold text-2xl'>{pendingSchedules}</h4>
                      <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                        <FontAwesomeIcon 
                          className='text-white text-lg translate-y-2' 
                          icon={faSpinner} />
                      </div>
                    </div>
                    
                    <h5 className='text-gray-500 font-thin my-4'>
                    Total Pending Schedules</h5>
                </div>
                {/* Schedules Executed */}
                <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                    <div className='flex justify-between '>
                      <h4 className='font-bold text-2xl'>{executedSchedules}</h4>
                      <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                        <FontAwesomeIcon 
                          className='text-white text-lg translate-y-2' 
                          icon={faCalendarCheck} />
                      </div>
                    </div>
                    <h5 className='text-gray-500 font-thin my-4'>
                    Schedules Executed</h5>
                </div>
                {/* Failed Schedules */}
                <div className='rounded-md bg-white shadow-md px-12 py-5 '>
                    <div className='flex justify-between '>
                      <h4 className='font-bold text-2xl'>0</h4>
                      <div className='bg-[#0a474c] rounded-full h-10 w-10 text-center'>
                        <FontAwesomeIcon 
                          className='text-white text-lg translate-y-2' 
                          icon={faCalendarXmark} />
                      </div>
                    </div>
                    <h5 className='text-gray-500 font-thin my-4'>
                    Failed Schedules </h5>
                </div>
              </div>
              <div className="p-6 py-6 w-full flex flex-col gap-3 lg:gap-1 lg:flex-row lg:justify-between justify-center ">
                <div>
                    <input
                        type='text'
                        placeholder='Search by name, text or status'
                        className='rounded border px-3 focus:border-none text-gray-500 focus:bg-white min-w-80  placeholder:tracking-tight py-2 bg-[#f0f0f0] '
                        onChange={handleSearch}
                    />
                    <button >
                      <FontAwesomeIcon 
                      className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                      icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className='flex text-[#0a474c] flex-row '>
                    <Link to='/create-schedule' className='  rounded-md border border-[#0a474c] p-2 hover:bg-[#0a474c] hover:text-white'>
                      <FontAwesomeIcon className='mx-1 ' icon={faCalendar} />
                      <span className='text-sm '>Create Schedule</span>
                    </Link>
                    <select
                        className='bg-white px-2 p-2 mx-2 text-sm text-center text-gray-500 font-medium border border-gray-400 rounded-lg focus:border-none '
                        value={itemsPerPage}
                        onChange={(e)=>setItemsPerPage(e.target.value)}
                    >
                        {entriesArr.map((a)=>(
                            <option key={a} value={a}>{a} per page</option>
                        ))}
                    </select>
                    <ExportCSV
                      data={data}
                    />
                </div>
              </div>
              {/* chedules */}
              {/* <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                <h5 className='text-lg my-2'>Schedules</h5>
                <table className='text-slate-500 w-full '>
                  <hr/>
                  <tr className='text w-full my-2 text-xs font-serif flex lg:grid lg:grid-cols-12   '>
                    <td className='col-span-2  min-w-48'>SEND FROM</td>
                    <td className='col-span-2 min-w-48'>TITLE</td>
                    <td className='col-span-2 min-w-48'>MESSAGE TYPE</td>
                    <td className='col-span-2 min-w-48'>STATUS</td>
                    <td className='col-span-2 min-w-48'>DELIVERY DATE</td>      
                    <td className='col-span-2 min-w-48'>ACTION</td>      
                  </tr>
                  <hr/>
                </table>
              </div> */}
              <div  className='mb-4 border overflow-scroll overflow-x-scroll overflow-y-scroll   bg-white   rounded-lg shadow-sm '>
                <table>
                    <tr className='bg-white font-sans lg:grid-flow-col lg:col-span-10 text-center uppercase border  flex font-medium text-slate-900 text-sm'>
                        <td className=' min-w-48 border-r  col-span-2 py-3 font-serif '>
                           Name
                            <button onClick={()=>sortBy('name')}>
                            <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                            </button>
                        </td>
                        <td className=' min-w-48 border-r  col-span-2 py-3'>
                            To
                            <button onClick={()=>sortBy('receiver')}>
                            <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                            </button>
                        </td>
                        <td className=' min-w-48 border-r  col-span-2 py-3'>
                            Text
                            <button onClick={()=>sortBy('text')}>
                            <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                            </button>
                        </td>
                        <td className=' min-w-48 border-r  col-span-2 py-3'>Status
                        <button onClick={()=>sortBy('status')}>
                            <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                            </button>
                        </td>
                        <td className=' min-w-48 border-r  col-span-2 py-3'>Scheduled At</td>               
              
              
                    </tr>
                    {/* Contacts Data */}
                    <div className='min-h-80 font-sans max-h-[400px]'>
                          {paginatedData.length>0 &&  paginatedData.map((a,ind)=>{
                          
                            return (
                            <>
                            <tr key={ind} className='bg-white w-full flex lg:grid-flow-col lg:col-span-10   font-normal text-slate-900'>
                              <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.name} </td>
                              <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.receiver}</td>
                              <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.text}</td>
                              <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.status}</td>
                              <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.scheduleAt}</td>
                              
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
        </div>
      )
}

export default ScheduleMessage
