import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import authService from '../service/authService';
import httpReq from '../service/httpReq';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const CreateGroupModal = ({onClose,open}) => {
    const [name,setName] = useState('');
    const [errs,setErrs] = useState({});
    let user = authService.getUser();
    //console.log(user);
    
    const postData = async(url,obj)=>{
        try{
            let response = await httpReq.post(url,obj);
            //console.log(response);
            if(response.status===201){
                alert(response.data);
                setErrs({});
                onClose();
            }
           
           
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
        //console.log(user,name);
        postData(`/groups/${user._id}`,{name:name});
        
    }
    return (
        <>
        <Dialog
            open={open}
            className='p-4'
            onClose={onClose}
        >
            <DialogTitle>Create a new Group</DialogTitle>
            <DialogContent >
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
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit" onClick={()=>handleSubmit()}>CREATE</Button>
            </DialogActions>
        </Dialog>
            
        </>
      )
}

export default CreateGroupModal
