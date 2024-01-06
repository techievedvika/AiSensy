import { faAddressBook, faBorderAll, faCommentDots, faEnvelopesBulk, faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='  min-h-[800px] bg-[#0a474c]  flex flex-col gap-3 items-center'>
      <Link to=''>
        <img className='max-h-12 my-4' src='data:image/png;base64,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'/>
      </Link>
      <Link  className='text-xl flex flex-col ' to='/dashboard'>
      <FontAwesomeIcon 
      className='text-2xl rounded-full p-2 py-3  active:bg-gray-500' icon={faBorderAll} style={{color: "#ffffff",}} />
      <div className='text-xs text-white'>Dashboard</div>
      </Link>
      <Link  className='text-xl flex flex-col ' to='/contacts'>
      <FontAwesomeIcon 
      className='text-2xl rounded-full p-2 py-3  active:bg-gray-500' 
      icon={faAddressBook} style={{color: "#ffffff",}} />
      <div className='text-xs text-white'>Contacts</div>
      </Link>
      <Link  className='text-xl flex flex-col ' to='/messages'>
      <FontAwesomeIcon 
      className='text-2xl rounded-full p-0.5 py-2  active:bg-gray-500' 
      icon={faCommentDots} style={{color: "#ffffff",}} />
      <div className='text-xs max-w-24  text-center text-white'>Custom Message</div>
      </Link>
      <Link  className='text-xl flex flex-col ' to='/bulkmessages'>
      <FontAwesomeIcon 
      className='text-2xl rounded-full p-0.5 py-2  active:bg-gray-500' 
      icon={faEnvelopesBulk} style={{color: "#ffffff",}} />
      <div className='text-xs max-w-24 text-white text-center'>Send Bulk Messages</div>
      </Link>
      
    </div>
  )
}

export default Sidebar
