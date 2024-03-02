import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Sidebtn from '../components/Sidebtn'
import CreateGroupModal from '../components/CreateGroupModal'
import authService from '../service/authService'
import httpReq from '../service/httpReq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSort } from '@fortawesome/free-solid-svg-icons'
import ExportCSV from '../components/ExportCSV'
import Pagination from '../components/Pagination'
import NavMenu from '../components/NavMenu'

const MessageDetails = ({show,onShow,onClose,lgScreen}) => {

    const [data,setData]=useState([]);
    let user = authService.getUser();
    let [ogData,setogdata] = useState([]);
    const[paginated,setPaginated]=useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [itemsPerPage,setItemsPerPage] = useState(25);
    const totalPages = Math.ceil(data.length / (+itemsPerPage));
    const startIndex = currentPage * (+itemsPerPage);
    const endIndex = Math.min(startIndex + (+itemsPerPage), data.length);
    const paginatedData = data.slice(startIndex, endIndex);
    const entriesArr = [25,50,100];

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };
    
    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };
    const getData = async()=>{
        try{
            let response = await httpReq.get(`/${user._id}/messages`);
            //console.log(response);
            if(response.status===200){
                setData(response.data);
                setogdata(response.data);
               
            }
           
        }catch(err){
            console.log(err);
        }
    }
    const handleSearch = (e) => {
        const inputValue = e.target.value.trim(); 
        //console.log(ogData);
        if (inputValue === '') {
            setData(ogData); 
        } else {
            const filtered = ogData.filter((a) => {
                return a.contact.toLowerCase().includes(inputValue.toLowerCase()) || a.text.toLowerCase().includes(inputValue.toLowerCase());
            });
            console.log(inputValue,filtered);
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
     getData();
     setPaginated(paginatedData);
    },[startIndex])
   
   
  return (
      <div className="grid grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
        <div className={`lg:ms-60 lg:relative col-span-12 border ${show && 'hidden'} `}>
                <NavMenu
                    onShow={onShow}
                    page={'Sent Messages'}
                />
              <div className="bg-[#f7f7f7]  flex flex-col items-center  w-full p-6 lg:px-32 ">
                    <div className="py-3 pt-6 w-full flex  gap-3 lg:gap-1 flex-row justify-between  ">
                       
                            {/* Searchbar */}
                            <div>
                                <input
                                    type='text'
                                    placeholder='Search by name or text'
                                    className='rounded border px-3 focus:border-none text-gray-500 focus:bg-white min-w-[300px]  placeholder:tracking-tight py-2 bg-[#f0f0f0] '
                                    onChange={handleSearch}
                                />
                                <button >
                                <FontAwesomeIcon 
                                className='text-[#0a474c] text-sm rounded-full -translate-x-6'
                                icon={faMagnifyingGlass} />
                                </button>
                            </div>
                            <div className='flex gap-3'>
                                <ExportCSV
                                    data={data}
                                />
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
                  {/* <div className='px-8 my-2 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'> 
                      <table className='text-slate-500 w-full '>
                          <tr className='text border-y font-semibold  w-full text-sm my-2 font-serif flex lg:grid lg:grid-cols-6  py-3 '>
                              <td className='col-span-2 min-w-48'>TO</td>
                              <td className='col-span-2 min-w-48'>TEXT</td>
                              <td className='col-span-2 min-w-48'>STATUS</td>
                          </tr>
                          {data && data.length>0 && data.map((a,ind)=>(
                            <tr key={ind} className='lg:grid lg:grid-cols-6 flex w-full my-2'>
                                <td className='col-span-2 min-w-48'>{a?.contact}</td>
                                <td className='col-span-2 min-w-48'>{a?.text}</td>
                                <td className='col-span-2 min-w-48'>{a?.status}</td>
                            </tr>
                          ))}
                      </table>
                  </div> */}
                  <div className=' mb-4 border w-full overflow-scroll   bg-white   rounded-lg shadow-sm '>
                        <table className='w-full '>
                            <tr className='bg-white  w-full lg:grid lg:grid-flow-col lg:col-span-6 font-sans text-center uppercase border  flex font-medium text-slate-900 text-sm'>
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
                                    <tr key={ind} className='bg-white w-full flex lg:grid lg:grid-cols-6  font-normal text-slate-900'>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.contact} </td>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.text} </td>
                                    <td className='col-span-2 border p-1.5 text-center min-w-48'>{a?.status} </td>
                                    
                                    </tr>
                                    </>
                                )})}
                            </div>
                        </table>     
                  </div>
                  <div className='w-full justify-stretch my-3'>
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

export default MessageDetails
