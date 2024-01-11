import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sidebtn = ({onShow}) => {
  return (
    <div className='bg-white flex lg:hidden p-5'>
        <button 
        onClick={onShow}
        className='mx-2 h-10 w-10 rounded-full text-center hover:bg-gray-100'
        >
            <FontAwesomeIcon className='text-xl   text-center  ' icon={faBars} />
        </button>
        <h5 className='text-xl'>AiSensy</h5>
    </div>
  )
}

export default Sidebtn
