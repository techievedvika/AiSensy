import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import authService from '../service/authService';
import httpReq from '../service/httpReq';

const AddRecordModal = ({onClose,open,name,rcd,onChange,onSubmit,contacts}) => {

    // const[contacts,setContacts]=useState([]);
    // const[rcd,setRcd]=useState({receivers:[],msg:''});
    // const[entries,setEntries]=useState([]);

    // const user=authService.getUser();

    // const fetchdata = async()=>{
    //     try{
    //         let response = await httpReq.get(`/user/${user._id}/contacts`);
    //         console.log(response);
    //         if(response.status===200){
    //             setContacts(response.data);
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    // const handleChange = (e)=>{
    //     let record = {...rcd};
    //     let{name,value}=e.target;
    //     if(name==='receivers'){
    //         if(e.target.checked){
    //             record.receivers.push(value);
              
    //         }else{
    //             let findVal = record.receivers.findIndex((a)=>a===value);
    //             record.receivers.splice(findVal,1);
    //         }
    //     }else{
    //         record[name]=value;
    //     }
    //     setRcd(record);
    // }
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     if(rcd.msg && rcd.receivers.length>0){
    //         let entry = {...rcd,sender:user.name,status:'pending'};
    //         setEntries([...entries,entry]);
    //     }
    // }
    // useEffect(()=>{
    //     fetchdata();
    // },[]);
  return (
    <>
            <Dialog
                open={open}
                className='p-4'
                onClose={onClose}
                fullWidth
        
            >
                <DialogTitle className='px-10'>Create a New Record</DialogTitle>
                <DialogContent >
                    <DialogContentText className='text-center '>
                    </DialogContentText>
                    <div className='my-3 '>
                        <label className='text-slate-500 font-medium '> From</label>
                        <input
                            type='text'
                            value={name}
                            className='bg-[#f7f7f7] px-3 focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
                        />
                          
                        
                    </div>
                    {/* Message To */}
                    <div className='my-3'>
                        <label className='text-slate-500 font-medium '>To</label>
                        {contacts.map((a,ind)=>(
                            <div key={ind} className='flex gap-2 my-1'>
                                <input
                                    value={a.name}
                                    type='checkbox'
                                    name='receivers'
                                    onChange={onChange}
                                    checked={rcd.receivers.includes(a.name)}
                                />
                                <label>{a.name}</label>
                            </div>
                        ))}
                        {/* <select
                            multiple
                            value={rcd.receivers}
                            name='receivers'
                            className='bg-[#f7f7f7] px-3 focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
                        >
                            
                            {contacts.map((a,ind)=>(
                                <option key={ind} value={a.name}>{a.name}</option>
                            ))}
                        </select> */}
                       
                    </div>
                    {/* Message Content */}
                    <div className='my-3 mb-5'>
                        <label className='text-slate-500 font-medium '>Message </label>
                        <textarea
                            name='msg'
                            value={rcd.msg}
                            onChange={onChange} 
                            rows={5}
                        className='bg-[#f7f7f7] text-sm px-4 focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
                        ></textarea>
                    </div>
                </DialogContent>
                <DialogActions>
                    <div className='flex my-3 justify-between text-[#0a474c]'>
                        <button
                            onClick={onClose} 
                            className='border mx-1.5 border-[#0a474c]  px-3 py-1 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                            Close
                        </button>
                        <button
                            onClick={onSubmit}
                            className='border mx-1.5 border-[#0a474c]  px-3 py-1 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                            Add now
                        </button>
                    </div>
                </DialogActions>
            </Dialog>
        
    </>
  )
}

export default AddRecordModal
