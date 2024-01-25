import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const ImportContactsModal = ({onClose,open}) => {
  return (
    <>
                        <Dialog
                open={open}
                className='p-4'
                onClose={onClose}
                fullWidth
        
            >
                <DialogTitle className='px-10'>Import Contacts</DialogTitle>
                <DialogContent >
                    <DialogContentText className='text-center '>
                    </DialogContentText>
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
                </DialogContent>
                <DialogActions>
                    <div className='flex my-3 justify-between text-[#0a474c]'>
                        <button
                            onClick={onClose} 
                            className='border mx-1.5 border-[#0a474c]  px-3 py-1 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                            Close
                        </button>
                        <button
                            className='border mx-1.5 border-[#0a474c]  px-3 py-1 font-semibold hover:bg-[#0a474c] hover:text-white rounded-md '>
                            Add now
                        </button>
                    </div>
                </DialogActions>
            </Dialog>
    
    </>
  )
}

export default ImportContactsModal
