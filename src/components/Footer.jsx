import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='p-6 px-10'>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <div>
          <button className='rounded-'>
            <img className='max-w-24 hover:opacity-60 rounded' alt='meta' src='https://unicorn-cdn.b-cdn.net/320f485e-6486-4757-8d18-5d92dff38994/meta-badge-500.png'/>
          </button>
          <h6 className='my-3 opacity-50 tracking-normal max-w-44'>Smartest WhatsApp Engagement Platform</h6>
          <h6 className='my-3 opacity-50 tracking-normal max-w-44'>Made with ❤️️ in INDIA</h6>
        </div>
        <div>
          <h3 className='font-bold text-[22px] text-gray-800'>Platform</h3>
          <div className='my-4 flex flex-col'>
            <Link className='text-gray-800 hover:opacity-50 my-1' to='/'>Features</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>Use Cases</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>Pricing</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>Blog</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>Contact Us</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>Request A Demo</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>Become a Partner</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 lg:mb-1 mb-8 ' to='/'>Refund Policy</Link>
          </div>
        </div>
        {/* RESOURCES */}
        <div>
          <h3 className='font-bold text-[22px] text-gray-800'>Resources</h3>
          <div className='my-4 flex flex-col'>
            <Link className='text-gray-800 hover:opacity-50 my-1' to='/'>Learning Hub</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>WhatsApp Business API</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>Experience Notifications</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>Create WhatsApp Link</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>WhatsApp Button</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 max-w-40 ' to='/'>Learn Chatbot Development</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>AiSensy vs Wati</Link>
            <Link className='text-gray-800 hover:opacity-50 my-1 ' to='/'>AiSensy Vs Interakt</Link>
          </div>
        </div>
        {/* SOCIAL MEDIA */}
        <div>
          <h3 className='font-bold text-[22px] text-gray-800'>Connect</h3>
          <div className='my-4 flex gap-2 '>
            <Link className='text-gray-800 hover:opacity-50 my-1' to='/'>
              <img 
              className='max-h-6 transition duration-100 ease-in hover:translate-y-[1px]' 
              alt='social-media' 
              src='data:image/jpeg;base64,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'
              />
            </Link>
            <Link className='text-gray-800 hover:opacity-50 my-1' to='/'>
              <img
                className='max-h-6 transition duration-100 ease-in hover:translate-y-[1px]' 
                alt='social-media' 
                src='data:image/jpeg;base64,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'
              />
            </Link>
            <Link className='text-gray-800 hover:opacity-50 my-1' to='/'>
              <img
                className='max-h-6 transition duration-100 ease-in hover:translate-y-[1px]' 
                alt='social-media' 
                src='data:image/png;base64,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'
              />
            </Link>
            <Link className='text-gray-800 hover:opacity-50 my-1' to='/'>
              <img
                className='max-h-6 transition duration-100 ease-in hover:translate-y-[1px]' 
                alt='social-media' 
                src='data:image/png;base64,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'
              />
            </Link>
            <Link className='text-gray-800 hover:opacity-50 my-1' to='/'>
              <img
                className='max-h-6 transition duration-100 ease-in hover:translate-y-[1px]' 
                alt='social-media' 
                src='data:image/png;base64,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'
              />
            </Link>
           
          </div>
        </div>
      </div>
      <hr/>
      <button className='border-2  border-black py-2 px-3 mt-10 transition duration-100 hover:ease-in hover:-translate-y-px text-center rounded shadow-md hover:opacity-75 m-1 font-semibold'>Apply for the API</button>
      <Link to='/login'>
      <button className='mx-4 py-2 px-3 mt-10 transition duration-100 hover:ease-in hover:-translate-y-px text-center rounded-md hover:opacity-75 m-1 font-semibold'>
        Login
        <FontAwesomeIcon className='mx-2  ' icon={faArrowRight} />
        </button>
      </Link>
     
    </div>
  )
}

export default Footer