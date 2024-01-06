import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
        <div className="logo ">
            <Link to='/' className=''>
            <img className='max-h-12  transition duration-150 hover:ease-out hover:opacity-85 ' src='https://unicorn-cdn.b-cdn.net/67244a6e-1849-42d1-ae59-0afc5948afa8/aisensy---whatsapp-marketing-platform-logo.png' alt='logo'/>
            </Link>
        </div>
  )
}

export default Logo
