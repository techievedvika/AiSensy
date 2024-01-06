import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo';

const Navbar = () => {
  const[open,setOpen] = useState(false)
  return (
    <div className=" border  w-full sticky-top-0  bg-white bg-opacity-10  py-4 px-2 shadow-md ">
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
            <div className="px-2">Resources</div>
            <div className="px-2">Pricing</div>
            <div className="px-2">Product</div>
            <div className="px-2">Integrations</div>
            <button className='border py-2 px-3 text-white bg-green-500 rounded m-1 transition duration-150 hover:bg-green-600 hover:ease-in hover:-translate-y-px'>Start 14-Day Free Trial</button>
            <Link to='/login'>
              <div className='border-2 border-black transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Login</div>
            </Link>
        </div>

        </div>
        <div className="flex justify-center">
          {open && (
                <div className="after:content-['*'] transition-transform after:translate-x-3 font-semibold flex flex-col gap-3 mt-8 lg:hidden justify-between">
                    <div className="px-2">Resources</div>
                    <div className="px-2">Pricing</div>
                    <div className="px-2">Product</div>
                    <div className="px-2">Integrations</div>
                    <button className='border py-2 px-3 text-white bg-green-500 rounded m-1 transition duration-150 hover:bg-green-600 hover:ease-in hover:-translate-y-px'>Start 14-Day Free Trial</button>
                    <Link to='/login'>
                      <div className='border-2 border-black transition duration-150 hover:ease-out hover:-translate-y-0.5 p-2  text-center rounded m-1'>Login</div>
                    </Link>
                </div>
          )}
        </div>
    </div>
  )
}

export default Navbar
