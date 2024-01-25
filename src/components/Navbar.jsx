import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo';
import authService from '../service/authService';

const Navbar = () => {
  const[open,setOpen] = useState(false);
  let user = authService.getUser();
  return (
    <div className=" border sticky top-0  w-full  bg-white bg-opacity-90  py-4 px-2 shadow-md ">
        <div className='  flex justify-around  '>
        <div className="logo ">
          <Logo/>
        </div>
        <button onClick={()=>setOpen(!open)} className=' transform duration-150 after:translate-x-1 lg:hidden text-xl w-10 h-10 rounded-full text-center flex items-center justify-center shadow-xl border '>
      
        {
          open ? <span className='text-2xl mb-2'>x</span> :   <FontAwesomeIcon icon={faBars} />
        }
        </button>
        <div className="font-semibold lg:flex justify-between xs:hidden sm:hidden md:hidden ">
            <Link to='/'>
                      <div className='transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Resources</div>
            </Link>
            <Link to='/pricing'>
                      <div className='  transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Pricing</div>
            </Link>
            <Link to='/'>
                      <div className='  transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Product</div>
            </Link>
            <Link to='/'>
                      <div className='  transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Integrations</div>
            </Link>
            {!user && (<Link to='/pricing'>
                      <button className='border py-2 px-3 text-white bg-green-500 rounded m-1 transition duration-150 hover:bg-green-600 hover:ease-in hover:-translate-y-px'>Start 14-Day Free Trial</button>
            </Link>)}
            {user && (<Link to='/dashboard'>
                      <button className='border py-2 px-3 text-white bg-green-500 rounded m-1 transition duration-150 hover:bg-green-600 hover:ease-in hover:-translate-y-px'>Go to Dashboard</button>
            </Link>)}
            {!user && (
              <Link to='/login'>
              <div className='border-2 border-black transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Login</div>
            </Link>
            )}
            {user && (
              <Link to='/logout'>
              <div className='border-2 border-black transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Logout</div>
            </Link>
            )}
           
        </div>

        </div>
        <div className="flex justify-center">
          {open && (
                <div className="after:content-['*'] transition-transform after:translate-x-3 font-semibold flex flex-col gap-3 mt-8 lg:hidden justify-between">
                    <Link to='/'>
                              <div className='  transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Resources</div>
                    </Link>
                    <Link to='/pricing'>
                              <div className='  transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Pricing</div>
                    </Link>
                    <Link to='/'>
                              <div className='  transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Product</div>
                    </Link>
                    <Link to='/'>
                              <div className='  transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Integrations</div>
                    </Link>
                    {!user && (<Link to='/pricing'>
                      <button className='border py-2 px-3 text-white bg-green-500 rounded m-1 transition duration-150 hover:bg-green-600 hover:ease-in hover:-translate-y-px'>Start 14-Day Free Trial</button>
                    </Link>)}
                    {user && (<Link to='/dashboard'>
                      <button className='border py-2 px-3 text-white bg-green-500 rounded m-1 transition duration-150 hover:bg-green-600 hover:ease-in hover:-translate-y-px'>Go to Dashboard</button>
                    </Link>)}
                    {!user && (
                      <Link to='/login'>
                        <div className='border-2 border-black transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Login</div>
                      </Link>
                    )}
                    {user && (
                      <Link to='/logout'>
                        <div className='border-2 border-black transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Logout</div>
                      </Link>
                    )}
                </div>
          )}
        </div>
    </div>
  )
}

export default Navbar
