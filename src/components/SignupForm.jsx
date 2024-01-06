import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const[form,setForm]=useState({name:'',email:'',password:'',cpassword:'',mobile:''});
    const[errors,setErrors]=useState({});
    
    const handleChange = (e)=>{
      let {name,value}=e.target;
      let f1 = {...form};
      f1[name]=value;
      setForm(f1);
    }
    //Email Validation using regex
    function isValidEmail(email){
        const valid= /^[\w-\.]+@([\w-]+\.)+[\W-]{2,4}$/g;
        return email.match(valid);
    }
    //Password validation
    function validatePass(password){
        if(!password){
            return 'Password is Required';
        }
        if(password.length<8) return 'Password should be atleast 8 characters long';
        for(let p of password){
            if(!(p>='A' && p<='Z') || !(p>='0' && p<='9') || !(p>='a' && p<='z')){
                return 'Password can only contain digits and alphabets'
            }
        }
        return '';
    }
    //Mobile Number Validation
    function validateMob(mobile){
        if(!mobile) return 'Mobile Number is Required';
        for(let p of mobile){
            if(!(p>='0' && p<='9')){
                return 'Enter a valid mobile number';
            }
        }
        return '';
    }
    //Form Validation
    const validate = ()=>{
        let err = {...errors};
        err.name = !form.name ? 'Name is Required':'';
        err.email = !form.email ? 'Email is Required' : (isValidEmail(form.email)===true ? '':'Enter a valid email' ); 
        err.mobile = validateMob(form.mobile);
        err.password = validatePass(form.password);
        err.cpassword=form.password===form.cpassword ? '':'Passwords do not match';
        setErrors(err);
        //console.log(errors);
    }
    const handleSubmit = ()=>{
        validate();
        //Check if any errors
        
    }
    
  return (
    <div>
    <div className='my-4'>
       <input
         type='text'
         name='name'
         className='border-2 rounded-lg border-slate-500  w-full py-2 px-4'
         placeholder='Full Name'
         value={form.name}
         onChange={handleChange}
       />
       {errors && errors.name && <span className=' text-red-600 text-sm'>{errors.name}</span>}
    </div>
    <div className='my-4'>
       <input
         type='text'
         name='email'
         className='border-2 rounded-lg border-slate-500  w-full py-2 px-4'
         placeholder='Email'
         value={form.email}
         onChange={handleChange}
       />
       {errors && errors.email && <span className=' text-red-600 text-sm'>{errors.email}</span>}
    </div>
    <div className='my-4'>
       <input
         type='text'
         name='mobile'
         className='border-2 rounded-lg border-slate-500  w-full py-2 px-4'
         placeholder='Personal WhatsApp Number'
         value={form.mobile}
         onChange={handleChange}
       />
       {errors && errors.mobile && <span className=' text-red-600 text-sm'>{errors.mobile}</span>}
    </div>
    <div className='my-4'>
       <input
         type='password'
         name='password'
         className='border-2 rounded-lg border-slate-500  w-full py-2 px-4'
         placeholder='Password'
         value={form.password}
         onChange={handleChange}
       />
       {errors && errors.password && <span className=' text-red-600 text-sm'>{errors.password}</span>}
       <div className='text-sm my-1'>Minimum 8 letters with digits & alphabets</div>
       
    </div>
    <div className='my-4'>
       <input
         type='password'
         name='cpassword'
         className='border-2 rounded-lg border-slate-500  w-full py-2 px-4'
         placeholder='Confirm Password'
         value={form.cpassword}
         onChange={handleChange}
       />
       {errors && errors.cpassword && <span className=' text-red-600 text-sm'>{errors.cpassword}</span>}
    </div>
    <div className="">
     <button onClick={()=>handleSubmit()} className={`w-full rounded-lg text-white font-medium py-2 text-lg bg-[#0a474c] hover:bg-[#063338] disabled:bg-[#e0e0e0] disabled:text-gray-400 `}>Start Your FREE Trial</button>
    </div>
    <div className=' text-sm my-3 text-center text-slate-500'>
        <span>The Google </span>
        <Link to='/' className=' text-teal-800 ' >Privacy Policy</Link>
        <span> and </span>
        <Link to='/' className=' text-teal-800 ' >Terms of Service</Link>
        <span> apply </span>
    </div>
   
 </div>
  )
}

export default SignupForm
