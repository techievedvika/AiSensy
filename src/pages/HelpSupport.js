import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBarsProgress, faChevronDown, faClipboardList, faFile, faLayerGroup, faRocket } from '@fortawesome/free-solid-svg-icons'
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


const HelpSupport = () => {
    const[showSidebar,setShowSidebar]=useState(false);
    const [data,setData]=useState([]);
    const user = authService.getUser();
    const[form,setForm]=useState({user:user._id,subject:'',message:''})
    const fetchData = async()=>{
        try{
            const response = await httpReq.get(`/user/${user._id}/tickets`);
            //console.log(response);
            if(response.status===200){
                setData(response.data);
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
  return (
      <div className="grid relative grid-flow-row-dense grid-cols-12 ">
          <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
           <div className={` lg:relative lg:ms-24 col-span-12 border ${showSidebar && 'hidden'}`}>
            <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
            />
              {/* Navbar */}
              <div className="flex  bg-white border shadow-md  justify-between p-3 lg:px-6">
                  <h3 className="text-xl"> Support Tickets</h3>
                  <div className="hidden lg:block  justify-around gap-2">
                  </div>
              </div>
              <div className="bg-[#f7f7f7]  flex flex-col items-center     gap-4 w-full p-6 lg:px-32 ">
                  {/* Nav Buttons */}
                  <div className='flex w-full gap-4 justify-end pe-16 my-4'>
                      <div
                          className='text-[#0a474c] flex justify-end lg:gap-2 gap-1'>
                          {/* Create Template */}
                          <button onClick={handleClickOpen}  
                              className='border mx-1.5 border-black text-sm px-1.5 py-0.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                              <span className='text-lg font-bold'>+</span>
                              New Ticket
                          </button>
                          
                      </div>
                  </div>
                  
                  <div className='px-8 my-5 min-h-96 py-5 bg-white rounded-md shadow-md w-full overflow-scroll'>
                      
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
