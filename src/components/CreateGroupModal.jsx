import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import authService from '../service/authService';
import httpReq from '../service/httpReq';

const CreateGroupModal = ({onClose}) => {
    const [name,setName] = useState('');
    const [errs,setErrs] = useState({});
    let user = authService.getUser();
    //console.log(user);
    useEffect = (()=>{
        setErrs({});
    },[])
    const postData = async(url,obj)=>{
        try{
            let response = await httpReq.post(url,obj);
            setErrs({})
            alert(response.data);
        }catch(err){
            console.log(err);
            if(err.response.status===400){
                let error = {...errs}
                error.server =err.response.data.message; 
               setErrs(error);
            }
        }
    }
    const handleSubmit = (e)=>{
        //e.preventDefault();
        console.log(user,name);
        postData(`/groups/${user._id}`,{name:name});
    }
    return (
        <div className='bg border-2 border-gray-400 left-24 lg:left-60 bottom-[490px] lg:bottom-60 bg-white  absolute w-3/4 lg:w-1/2 p-5 pb-24 rounded-md shadow-md'>
          <div className='flex w-full justify-end '>
            <button onClick={onClose}  className='text-3xl text-gray-800 hover:text-gray-600 me-4'>
                <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <form className='my-3 mt-8'>
            {/* Group */}
            <div className='my-2'>
                {errs && errs.server && (
                    <span className='text-sm text-red-600'>{errs.server}</span>
                )}
            </div>
            <div className='my-2'>
                <label className='text-slate-500 font-medium '>Enter Group Name</label>
                <input
                    name='name'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    className='bg-[#f7f7f7] focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
                />
            </div>
            {/* Buttons */}
            <div className='flex flex-col my-6 justify-between text-[#0a474c]'>
                <button
                    onClick = {handleSubmit}
                    className='border my-2 mb-3  mx-1.5 border-[#0a474c]  px-3 py-1.5 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                    Create
                </button>
                <button onClick={onClose} 
                    className='border my-2 mx-1.5 border-[#0a474c]  px-3 py-1.5 font-semibold hover:bg-gray-600 hover:border-gray-600 hover:text-white rounded-md '>
                    Close
                </button>
            </div>
          </form>
        </div>
      )
}

export default CreateGroupModal
