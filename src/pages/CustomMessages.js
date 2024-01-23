import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import BtnGroup from '../components/BtnGroup'
import ListMsg from '../components/ListMsg'
import Sidebtn from '../components/Sidebtn'
import authService from '../service/authService'
import httpReq from '../service/httpReq'
import { Link } from 'react-router-dom'
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Messages = () => {
  const[msgType,setMsgType]=useState('plain');
  const user = authService.getUser();
  const[form,setForm]=useState({
    text:'',
    receiver:'',
    type:msgType,
    sender:user ? user._id :''
  });
  const[errors,setErrors]=useState({});
  const[showSidebar,setShowSidebar]=useState(false);
  const [contacts,setContacts]=useState([]);
  const fetchContacts = async()=>{
    try{
        let response = await httpReq.get(`/user/${user._id}/contacts`);
        //console.log(response.data);
        if(response.status===200){
          setContacts(response.data)
        }
    }catch(err){
      console.log(err);
    }
  }
  const handleFormChange = (e)=>{
    let{name,value}=e.target;
    let f1 = {...form};
    f1[name]=value;
    setForm(f1);
  }
  useEffect(()=>{
    fetchContacts();
  },[])
  //Form Validation
  const validate = ()=>{
    let err = {...errors};
    err.text = !form.text ? 'Message Can Not be Empty':'';
    err.receiver = !form.receiver ? 'Select Contact':'';
    return err;

}
const isValid =(errors)=>{
  let keys = Object.keys(errors);
  let count =keys.reduce((acc,curr)=>errors[curr] ?acc+1:acc,0);
  return count===0;
}
const postData = async(obj,url)=>{
  try{
    let res = await httpReq.post(url,obj);
    console.log(res);
    if(res.status===201){
      setForm({
        text:'',
        receiver:'',
        type:msgType,
        sender:user ? user._id :''
      });
    }
  }catch(err){
    console.log(err);
    if(err && err.response && err.response.status===400){
      alert(err.response.data);
    }
  }
}
const handleSubmit = ()=>{
    let errors = validate();
    //Check if any errors
    if(isValid(errors)){
      setErrors({});
      postData(form,'/messages');
      //alert('Submitted!!!')
    }else{
      setErrors(errors);
    }
}
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
        <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
      <div className={`lg:col-span-11 col-span-12 border ${showSidebar && 'hidden'}`}>
            <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
            />
        {/* Navbar */}
        <div className="flex bg-white border shadow-md  justify-between p-3 lg:px-6">
          <h3 className="text-xl"> Custom Messages</h3>
          <div className="hidden lg:block  justify-around gap-2">  
          </div>
        </div>
       
        {/* Messages */}
        <div className="bg-[#f7f7f7]  flex flex-col justify-center h-full  gap-4 w-full p-6 lg:px-32 ">
        <div className='flex justify-end'>
            <Link to='/user/messages' className='bg-[#0a474c] transform ease-in-out duration-150 hover:ease-in hover:-translate-y-px text-white p-1.5 border rounded-lg'>
            <FontAwesomeIcon icon={faSlack} />
            <span className='text-sm'> Message Logs</span>
            </Link>
        </div>
        <div className='bg-white lg:grid grid-cols-7 gap-8  rounded-md shadow-lg border  w-full mb-12 p-5 px-8'>
            <div className='lg:col-span-2 flex flex-row lg:flex-col gap-3   p-4 px-8 '>
              <button onClick={()=>setMsgType('plain')}  className={`${msgType==='plain' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>Plain Text</button>
              <button onClick={()=>setMsgType('with media')}  className={`${msgType==='with media' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md  text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>Text With Media</button>
              <button onClick={()=>setMsgType('with button')}  className={`${msgType==='with button' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md  text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>Message With Button</button>
              <button onClick={()=>setMsgType('list')}  className={`${msgType==='list' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md  text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>List Message</button>
              <button onClick={()=>setMsgType('location')}  className={`${msgType==='location' ? 'bg-[#0a474c] text-white' :'bg-white'} shadow-md  text-sm border hover:bg-[#0a474c]  hover:text-white rounded-md py-1.5`}>Send Location</button>
            </div>
            <div className='lg:col-span-5 p-4'>
              <div className='grid grid-cols-2'>
                    <div>
                      <select onChange={handleFormChange} name='receiver' value={form.receiver} className='border mb-1 border-gray-500 rounded-md p-2'>
                        <option value=''>Select Contact</option>
                        {contacts && contacts.map((a,ind)=>(
                          <option value={a._id} key={ind}>{a.name}</option>
                        ))}
                      </select>
                      {errors && errors.receiver && (<>
                        <br/>
                        <span className='text-red-400 text-sm'>{errors.receiver}</span>
                      </>)}
                    </div>
                    {/* <div>
                      <label className='text-gray-500 lg:mx-2'>Send to :</label>
                      <input
                        type='number'
                        placeholder='Enter Mobile Number'
                        className='border-b p-2 text-sm lg:text-base  border-gray-500'
                      />
                    </div> */}
              </div>
              <div className='flex flex-col justify-center my-4'>
                    <textarea
                    placeholder='type your message here...'
                    className='border rounded w-full p-3 '
                    cols={60}
                    rows={8}
                    name='text'
                    value={form.text}
                    onChange={handleFormChange}
                    >
                    </textarea>
                    {errors && errors.text && (
                        <span className='text-red-400 text-sm'>{errors.text}</span>
                      )}
              </div>
              
              {/* Message With Media */}
              {msgType==='with media' && (
                <>
                  <div className='my-4'>
                  <label className='text-gray-500 mx-2'>Select File</label>
                  <br/>
                  <input
                    type='file'
                    className='my-2 text-sm'
                  />
                  </div>
                </>
              )}
              {/* Message with button */}
              {msgType==='with button' && (
                <>
                  
                  <div className='  my-4'>
                    <label className='text-gray-500 text-start mx-2'>Footer Text</label>
                    <input
                      className='w-full my-2 border py-1.5 rounded-md bg-slate-50'
                    />
                  </div>
                  <div className='my-4'>
                      <BtnGroup/>
                  </div>
                </>
              )}
              {/* List Message */}
              {msgType==='list' && (
                <>
                  <ListMsg/>
                </>
              )}
              {/* Location */}
              {msgType==='location' && (
                <>
                  <div className='grid grid-cols-12 gap-12 my-4'>
                    <div className='col-span-5'>
                        <label className='text-gray-500 text-start mx-2'>Latitude</label>
                        <input
                          placeholder=''
                          type='number'
                          className='w-full my-2 border  py-1.5 rounded-sm bg-slate-50'
                        />
                    </div>
                    <div className='col-span-5'>
                        <label className='text-gray-500 text-start mx-2'>Longitude</label>
                        <input
                          placeholder=''
                          type='number'
                          className='w-full my-2 border py-1.5 rounded-sm bg-slate-50'
                        />
                    </div>
                  </div>
                 
                </>
              )}
              <div className='flex justify-end'>
                    <button onClick={()=>handleSubmit()} className='rounded-md p-2 px-3 hover:opacity-80 text-white bg-[#0a474c] '>Send</button>
              </div>
            </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Messages
