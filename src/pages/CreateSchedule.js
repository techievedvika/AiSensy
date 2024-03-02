import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

import NavMenu from '../components/NavMenu'
import httpReq from '../service/httpReq'
import authService from '../service/authService'
import { scheduleJob } from 'node-schedule'

const CreateSchedule = ({show,onShow,onClose,lgScreen}) => {

    const[schedule,setSchedule]=useState({
        name:'',
        receiver:'',
        text:'',
        date:'',
        time:''
    });
    const[errors,setErrors]=useState({});
    const[contacts,setContacts]=useState([]);
    const user = authService.getUser();
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
    const postData = async(url,obj)=>{
        try{
            let response = await httpReq.post(url,obj);
            if(response.status===200){
                setSchedule({
                    name:'',
                    receiver:'',
                    text:'',
                    date:'',
                    time:''
                });
                console.log(response);
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleChange = (e)=>{
        let{name,value}=e.target;
        let sch = {...schedule};
        sch[name]=value;
        setSchedule(sch);
    }
    const formatDate = (date,time)=>{
        const [hours, minutes] = time.split(':');
        const scheduledDate = new Date(`${date}T${time}:00+05:30`);
        const formattedDate = `${scheduledDate.getFullYear()}-${String(scheduledDate.getMonth() + 1).padStart(2, '0')}-${String(scheduledDate.getDate()).padStart(2, '0')}`;
        const formattedTime = `${String(scheduledDate.getHours()).padStart(2, '0')}:${String(scheduledDate.getMinutes()).padStart(2, '0')}:${String(scheduledDate.getSeconds()).padStart(2, '0')}`;
        const formattedDateTime = `${formattedDate}T${formattedTime}`;
        return formattedDateTime;
    }
    const validate = ()=>{
        let err = {...errors};
        err.name = !schedule.name ? 'Name is Required':'';
        err.receiver = !schedule.receiver ? 'receiver is Required':'';
        err.date = !schedule.date ? 'date is Required':'';
        err.time = !schedule.time ? 'time is Required':'';
        err.text = !schedule.text ? 'text is Required':'';
        return err;
    
    }
    const isValid =(errors)=>{
      let keys = Object.keys(errors);
      let count =keys.reduce((acc,curr)=>errors[curr] ?acc+1:acc,0);
      return count===0;
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let errors = validate();
        //Check if any errors
        if(isValid(errors)){
          setErrors({});
          let schDate = formatDate(schedule.date,schedule.time);
          let msgSchedule = {...schedule,scheduleAt:schDate};
          postData('/schedule',msgSchedule);
        }else{
          setErrors(errors);
        }

    }
    useEffect(()=>{
        fetchContacts();
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
            page={'Schedule'}
          />
            <div className="bg-[#f7f7f7]  flex flex-col items-center    gap-4 w-full p-6 lg:px-32 ">
                {/* Nav Buttons */}
                <div className='flex w-full gap-4 ms-10 my-3'>
                    <Link to='/schedulemessage' >
                        <FontAwesomeIcon className='text-[#0a474c] text-2xl' icon={faArrowLeft} />
                    </Link>
                    
                </div>
                {/* Schedule schedule */}
                <div className='bg-white rounded-md shadow-md w-5/6 lg:w-2/3 p-6'>
                    <schedule>
                        {/* Schedule Name */}
                        <div className='my-2'>
                            <label className='text-gray-500 text-sm font-medium my-2'>Schedule Name</label>
                            <input 
                                placeholder='Enter Schedule Name' 
                                type='text' 
                                className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'
                                name='name'
                                value={schedule.name}
                                onChange={handleChange}    
                                />
                                { errors.name && (<span className='text-xs text-red-700'>{errors.name}</span>)}
                         </div>
                        <div className='flex my-2 gap-8'>
                            {/* Number */}
                            <div className='w-full'>
                                <label className='text-gray-500 my-2 font-medium text-sm'>Receiver</label>
                                <select 
                                    name='receiver'
                                    value={schedule.receiver}
                                    onChange={handleChange}   
                                    className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'>
                                    <option value=''>Select Contact</option>
                                {contacts.map((a,ind)=>(
                                    <option value={a._id} key={ind}>{a.name}</option>
                                ))}
                                </select>
                                { errors.receiver && (<span className='text-xs text-red-700'>{errors.receiver}</span>)}
                            </div>
                            {/* Receiver Group */}
                            {/* <div className='w-full'>
                                <label className='text-gray-500 my-2 font-medium text-sm'>Receiver Group</label>
                                <select className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'>
                                </select>
                            </div> */}
                        </div>
                        <div className='flex my-2 gap-8'>
                            {/* Delivery date time */}
                            <div className='w-full'>
                                <label className='text-gray-500 my-2 font-medium text-sm'>Delivery Date </label>
                                <input 
                                    type='date' 
                                    name='date'
                                    value={schedule.date}
                                    onChange={handleChange}
                                    className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'/>
                                 { errors.date && (<span className='text-xs text-red-700'>{errors.date}</span>)}
                            </div>
                            {/* Messaging type */}
                            <div className='w-full'>
                                <label 
                                    className='text-gray-500 my-2 font-medium text-sm'>Delivery Time</label>
                                <input 
                                    type='time' 
                                    name='time'
                                    value={schedule.time}
                                    onChange={handleChange}
                                    className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'/>
                                 { errors.time && (<span className='text-xs text-red-700'>{errors.time}</span>)}
                            </div>
                        </div>
                        {/* Timezone */}
                        {/* <div className='my-2'>
                            <label className='text-gray-500 my-2 font-medium text-sm'>Select Timezone</label>
                            <select className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'>
                            </select>
                        </div> */}
                        {/* Message */}
                        <div className='my-2'>
                            <label className='text-gray-500 my-2 font-medium text-sm'>Message</label>
                           
                            <textarea
                                type='text'
                                name='text'
                                value={schedule.text}
                                onChange={handleChange} 
                                rows={4}
                                className='text-sm w-full border py-1.5 rounded-md px-3 focus:bg-white focus:shadow-lg bg-[#f7f7f7] my-2'
                            >
                            </textarea>
                            { errors.text && (<span className='text-xs text-red-700'>{errors.text}</span>)}
                        </div>
                        {/* Submit */}
                        <button onClick={handleSubmit} className='border rounded-md p-2 text-[#0a474c] border-[#0a474c] text-sm my-4 hover:text-white hover:bg-[#0a474c]'>Create Schedule</button>
                    </schedule>
                </div>
            </div>
        </div>
         
    </div>
  )
}

export default CreateSchedule
