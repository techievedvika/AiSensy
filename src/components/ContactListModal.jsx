import React from 'react'

const ContactListModal = ({onClose}) => {
  return (
    <div className='bg border-2 left-16 lg:left-60 bottom-16 lg:bottom-72 bg-white  absolute w-3/4 lg:w-1/2 p-5 rounded-md shadow-md'>
      <form className='my-3 mt-8'>
        {/* Message From */}
        <div className='my-2'>
            <label className='text-slate-500 font-medium '>Select Number (From)</label>
            <select 
                type='number'
                className='bg-[#f7f7f7] focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
            >
                <option></option>
            </select>
        </div>
        {/* Receiver Group */}
        <div className='my-2'>
            <label className='text-slate-500 font-medium '>Select Receiver Group</label>
            <select 
                type='number'
                className='bg-[#f7f7f7] focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
            >
                <option></option>
            </select>
        </div>
        {/* Message Content */}
        <div className='my-2 mb-5'>
            <label className='text-slate-500 font-medium '>Message </label>
            <textarea 
                rows={6}
               className='bg-[#f7f7f7] text-sm px-4 focus:bg-white border focus:shadow-lg py-1.5 my-1 w-full rounded-md'
            ></textarea>
        </div>
        {/* Buttons */}
        <div className='flex my-3 justify-between text-[#0a474c]'>
            <button
                onClick={onClose} 
                className='border mx-1.5 border-[#0a474c]  px-3 py-1 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                Close
            </button>
            <button
                className='border mx-1.5 border-[#0a474c]  px-3 py-1 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                Import
            </button>
        </div>
      </form>
    </div>
  )
}

export default ContactListModal
