import React, { useEffect, useState } from 'react'
import authService from '../../service/authService';
import httpReq from '../../service/httpReq';
import Sidebar from '../../components/Sidebar';
import Sidebtn from '../../components/Sidebtn';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogContentText } from '@mui/material'


const UserTickets = () => {
    const[showSidebar,setShowSidebar]=useState(false);
    const [data,setData]=useState([]);
    const user = authService.getUser();
    const[form,setForm]=useState({user:user._id,subject:'',message:'',reply:''})
    const[ticketId,setTicketId]=useState('')
    const fetchData = async()=>{
        try{
            const response = await httpReq.get(`/admin/tickets`);
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
            let response = await httpReq.put(url,obj);
            //handleClose();
            console.log(response);
            if(response.status===201){
                handleClose();
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleTicket = (id)=>{
        let ticket = data.find((a)=>a._id===id);
        if(ticket){
            setTicketId(id);
            setOpen(true);
            setForm(ticket);

        }
    }
    const handleSubmit = ()=>{
        postData(`/admin/ticket/${ticketId}`,form);
        

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
                  <div className='px-8 my-5 mb-60  py-5 pb-24 bg-white rounded-md shadow-md w-full overflow-scroll'>
                      
                      <table className='text-slate-500 w-full '>
                       
                          <tr className='text border-y  py-2 w-full text-sm uppercase my-2 font-serif flex    '>
                              <td className='col-span-2 min-w-48'>subject</td>
                              <td className='col-span-2 min-w-48'>message</td>
                              <td className='col-span-2 min-w-48'>STATUS</td>
                              <td className='col-span-2 min-w-64'>created at</td>
                              <td className='col-span-2 min-w-64'>updated at</td>
                              <td className='col-span-2 min-w-48'>action</td>

                          </tr>
                          {data.length>0 && data.map((a,ind)=>(
                            <tr 
                                className='text w-full  my-4 font-sans flex   text-slate-500'
                                key={ind}
                            >
                            <td className='col-span-2 min-w-48'>{a.subject}</td>
                              <td className='col-span-2 min-w-48'>{a.message}</td>
                              <td className='col-span-2 min-w-48'>{a.status}</td>
                              <td className='col-span-2 text-sm min-w-64'>{a.createdAt}</td>
                              <td className='col-span-2 text-sm min-w-64'>{a.updatedAt}</td>
                              <td className='col-span-2 text-sm min-w-48'>
                                <button onClick={()=>handleTicket(a._id)} className='border p-1.5 rounded-md border-gray-500 bg-[#0a474c] hover:translate-y-px text-white'>Respond</button>
                              </td>
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
        <DialogTitle>Support Ticket</DialogTitle>
        <DialogContent >
        <DialogContentText className='text-center '>
         
          </DialogContentText>
        <div className='flex flex-col my-4 mx-8'>
            <label className='text-slate-500 font-medium'>Subject</label>
            <input
                readOnly
                name='subject'
                value={form.subject}
                onChange={handleChange}
                className='border p-2 rounded-md border-gray-500 min-w-72 py-1.5'
            />
        </div>
        <div className='flex flex-col gap-1 my-4 mx-8'>
            <label className='text-slate-500 font-medium'>Message</label>
            <textarea
                readOnly
                name='message'
                value={form.message}
                onChange={handleChange} 
                rows={3} 
                className='border p-2 border-gray-500 min-w-72 py-1.5 rounded-md'>
            </textarea>
        </div>
        <div className='flex flex-col  gap-1 my-4 mx-8'>
            <label className='text-slate-500 font-medium'>Add a reply</label>
            <textarea
                name='reply'
                value={form.reply}
                onChange={handleChange} 
                rows={5} 
                className='border border-gray-500 min-w-72 py-1.5 rounded-md'>
            </textarea>
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={()=>handleSubmit()}>SEND</Button>
        </DialogActions>
      </Dialog>
        
      </div>
  )
}

export default UserTickets
