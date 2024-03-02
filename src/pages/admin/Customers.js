import React, { useEffect, useState } from 'react'
import authService from '../../service/authService';
import httpReq from '../../service/httpReq';
import Sidebar from '../../components/Sidebar';
import Sidebtn from '../../components/Sidebtn';

const Customers = ({show,onShow,onClose,lgScreen}) => {
    const [data,setData]=useState([]);
    const user = authService.getUser();
    const fetchData = async()=>{
        try{
            const response = await httpReq.get(`/users`);
            console.log(response);
            if(response.status===200){
                setData(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    

  return (
      <div className="grid relative grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
           <div className={` lg:relative lg:ms-60 col-span-12 border ${show && 'hidden'}`}>
            <Sidebtn
            onShow={onShow}
            />
              {/* Navbar */}
              <div className="flex  bg-white border shadow-md  justify-between p-3 lg:px-6">
                  <h3 className="text-xl"> </h3>
                  <div className="hidden lg:block  justify-around gap-2">
                  </div>
              </div>
              <div className="bg-[#f7f7f7]  flex flex-col items-center     gap-4 w-full p-6 lg:px-32 ">
                  {/* Nav Buttons */}
                  <div className='px-8 my-5 mb-60  py-5 pb-24 bg-white rounded-md shadow-md w-full overflow-scroll'>
                      
                      <table className='text-slate-500 w-full '>
                       
                          <tr className='text border-y  py-2 w-full text-sm uppercase my-2 font-serif flex    '>
                              <td className='col-span-2 min-w-48'>NAME</td>
                              <td className='col-span-2 min-w-48'>email</td>
                              <td className='col-span-2 min-w-48'>mobile no.</td>
                              <td className='col-span-2 min-w-64'> role</td>
                             

                          </tr>
                          {data.length>0 && data.map((a,ind)=>(
                            <tr 
                                className='text w-full  my-4 font-sans flex   text-slate-500'
                                key={ind}
                            >
                            <td className='col-span-2 min-w-48'>{a.role!=='superadmin' && a.name}</td>
                              <td className='col-span-2 min-w-48'>{a.role!=='superadmin' && a.email}</td>
                              <td className='col-span-2 min-w-48'>{a.role!=='superadmin' && a.mobile}</td>
                              <td className='col-span-2 text-sm min-w-64'>{a.role!=='superadmin' && a.role}</td>


                            </tr>
                          ))}
                         
                      </table>
                  </div>
              </div>
                
          </div>
          
        
      </div>
  )
}

export default Customers
