import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import authService from '../service/authService';
import httpReq from '../service/httpReq';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const ContactForm = ({onClose,editId,open}) => {
    const [errors,setErrors] = useState({});
    const [form,setForm] = useState({
        name:'',
        groups:[],
        mobile:'',
    });
    const[groups,setGroups]=useState([]);
    let user = authService.getUser();
    //Get Groups of the user
    //console.log(editId);
    const fetchGroups =async()=>{
        try{
            let response = await httpReq.get(`/groups/${user._id}`);
            //console.log(response.data);
            if(response.status===200){
                setGroups(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    //Fetch Details of Contact  to be edited
    const fetchContact = async()=>{
        if(editId){
                try{
                    let response = await httpReq.get(`/contact/${editId}`);
                    //console.log(response.data);
                    if(response.status===200){
                        setForm(response.data);
                        //console.log(form);
                    }
                }catch(err){
                    console.log(err);
                }
        }
    }
    useEffect(() => {
        fetchGroups();
        setErrors({});
        fetchContact();
    }, []);
    //Mobile validation 
    function validateMob(mobile){
        if(!mobile) return 'Mobile Number is Required';
        if(mobile.length!==10){
          return 'Enter a valid mobile number';
        }
        for(let p of mobile){
            if(!(p>='0' && p<='9')){
                return 'Enter a valid mobile number';
            }
        }
        return '';
    }
    //Form Validation
    const validate = ()=>{
        let err = {};
        err.name = !form.name ? 'Name is Required':'';
        err.mobile = validateMob(form.mobile);
        err.groups = form.groups.length===0 ? 'At least one group should be selected' :'';
        return err;
    
    }
    const isValid =(errors)=>{
      let keys = Object.keys(errors);
      let count =keys.reduce((acc,curr)=>errors[curr] ?acc+1:acc,0);
      return count===0;
    }
    // Add a new Contact
    const postData = async(obj,url)=>{
      try{
        let res = await httpReq.post(url,obj);
        //console.log(res);
        if(res.status===201){
            alert(res.data.message);
            setForm({name:'',
            groups:[],
            mobile:''})
        }
       
      }catch(err){
        console.log(err);
        if(err && err.response && err.response.status===400){
          let errr = {...errors};
          errr.server = err.response.data;
          setErrors(errr);
          //alert(err.response.data);
        }
      }
    }
    //Update Existing Contact
    const putData = async(url,obj)=>{
        try{
            let res = await httpReq.put(url,obj);
            console.log(res);
            if(res.status===201){
                alert(res.data.message);
                setForm({name:'',
                groups:[],
                mobile:''})
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleSubmit = ()=>{
        //e.preventDefault();
        let errors = validate();
        //Check if any errors
        if(isValid(errors)){
          setErrors({});
          if(editId){
                putData(`/contact/${editId}`,form);
          }else{
              postData(form,`/user/${user._id}/contacts`);
          }
          //alert('Submitted!!!')
        }else{
          setErrors(errors);
        }
    }
    const handleChange = (e)=>{
        let {name,value,type}=e.target;
        //console.log(e,value);
        let f1={...form};
        if(type==='checkbox'){
            //console.log(e.target.checked);
            if(e.target.checked){
                f1.groups.push(value);
              
            }else{
                let findVal = f1.groups.findIndex((a)=>a===value);
                f1.groups.splice(findVal,1);
            }
        }else{
            f1[name]=value;
        }
        setForm(f1);
        //console.log(form);
    }
    
    return (
        <>
            <Dialog
                open={open}
                className='p-4'
                onClose={onClose}
        
            >
                <DialogTitle>Add a new Contact</DialogTitle>
                <DialogContent >
                    <DialogContentText className='text-center '>
                    </DialogContentText>
                    <div className='my-2'>
                    {errors && errors.server && (
                        <span className='text-xs text-red-400'>{errors.server}</span>
                    )}
                </div>
                <div className='my-2'>
                    <label className='text-slate-500 font-medium '>Name</label>
                    <input
                        name='name'
                        onChange={handleChange}
                        value={form.name}
                        required
                        className='bg-[#f7f7f7] focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
                    />
                    {errors && errors.name && <span className='text-xs text-red-400'>{errors.name}</span>}
                </div>
                <div className='my-2 mb-3'>
                    <label className='text-slate-500 font-medium '>Mobile Number</label>
                    <input
                        name='mobile'
                        onChange={handleChange}
                        value={form.mobile}
                        required
                        className='bg-[#f7f7f7] focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
                    />
                    {errors && errors.mobile && <span className='text-xs text-red-400'>{errors.mobile}</span>}
                </div>
                <div className='my-2'>
                    <div className='font-medium text-slate-500 my-1'>Select Groups</div>
                    {groups && groups.map((a,ind)=>(
                        <div key={ind}>
                            <input
                                className=' focus:bg-white checked:bg-gray-700 border me-1.5 rounded-md'
                                type='checkbox'
                                value={a._id}
                                checked = {form.groups.find((s)=>s===a._id)}
                                onChange={handleChange}
                            />
                            <label className='text-slate-700 font-medium text-sm text-center'>{a.name}</label>
                        </div>
                    ))}
                    {errors && errors.groups && <span className='text-xs text-red-400'>{errors.groups}</span>}
                </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit" onClick={()=>handleSubmit()}>  {editId ? 'Update' :'Add'}</Button>
                </DialogActions>
            </Dialog>
            
        </>
      )
}

export default ContactForm
