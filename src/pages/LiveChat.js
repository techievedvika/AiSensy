import { faMagnifyingGlass, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Sidebtn from '../components/Sidebtn'
import httpReq from '../service/httpReq'
import authService from '../service/authService'
import NavMenu from '../components/NavMenu'

const LiveChat = ({show,onShow,onClose,lgScreen}) => {
    const[cType,setCtype]=useState('active');
    const[form,setForm]=useState({msg:''})
    const[sentMsg,setMsg]=useState('');
    const[chats,setChats]=useState('');

    const user = authService.getUser();

    const fetchData = async()=>{
        try{
            let response = await httpReq.get(`/chats/${user._id}`);
            //console.log(response);
            if(response.status===200){
                setChats(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    const posData = async(url,obj)=>{
        try{
            let response = await httpReq.post(url,obj);
            console.log(response);
            if(response.status===200){
                setForm({msg:''});
                fetchData();
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(form.msg){
            posData('/user/chats',{user:user._id,sent:form.msg});
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); 
          handleSubmit(e); 
        }
      };
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
          <div className={` lg:ms-64 lg:relative col-span-12 border ${show && 'hidden'}`}>
                <NavMenu
                    onShow={onShow}
                    page={'Live Chat'}
                />
            {/* nav Area */}
            {/* <div className='flex gap-3 p-5 py-8'>
              
                <div className='w-full'>
                    <input 
                        placeholder='Search name or mobile number'
                        className='w-2/3 py-2 px-5 border rounded-md bg-[#f7f7f7]  text-sm' />
                    <button className='h-7 -translate-x-10  w-7 rounded-full bg-[#d6ede9] text-center'>
                        <FontAwesomeIcon className='text-sm' icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div> */}
            <div className=' bg-[#0a474c] flex lg:justify-between px-8 py-3 w-full'>
                {/* chat Type */}
                <div className='text-white font-medium flex lg:gap-8 gap-16 text-xs tracking-wide leading-loose '>
                    <button>ACTIVE(0)</button>
                    <button>REQUESTING(0)</button>
                    <button>INTERVENED(0)</button>
                </div>
                <div className='font-medium text-white hidden lg:block'>
                    Chat Profile
                </div>
            </div>
            <div className='grid grid-cols-10 h-full'>
                <div className='col-span-3 hidden lg:block border  border-gray-100'>

                </div>
                <div className='col-span-10 flex flex-col lg:col-span-7 border min-h-[250px] h-full bg-[#e0d5d5] p-3 px-2'>
                    <div className=' h-full overflow-y-scroll'>
                        {chats.length>0 && chats.map((a,ind)=>(
                            <div key={ind} className='px-2'>
                                <div className='flex justify-end'>
                                    <div className='p-2 max-w-60 text-wrap px-4 rounded-md border border-gray-300 bg-[#cce1e3]'>
                                        {a.sent}
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='p-2 px-4 rounded-md border border-gray-300 bg-slate-100'>
                                        {a.received}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className=' w-full flex  grid-cols-12 '>

                            <div className='col-span-10 w-full'>
                                <input
                                    name='msg'
                                    type='text'
                                    value={form.msg}
                                    placeholder='.....'
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className='w-full px-5 h-12 rounded-md border focus:border-none'
                                />
                            </div>
                            <button type='submit'  className='col-span-1 relative right-10 text-xl'>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveChat
