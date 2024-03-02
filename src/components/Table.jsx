import * as React from "react";



const Table = () => {
 
  return (
    <>
      <table className=' '>
                <tr className='bg-white font-serif text-center uppercase border  flex font-medium text-slate-900 text-sm'>
                    <td className=' min-w-48 border-r  col-span-2 py-3 font-serif '>
                        {/* <input
                            type='checkbox'
                            className='rounded-md border-2 w-6 h-4 translate-y-1 mx-2 border-gray-800 bg-[#0a474c] checked:bg-[#0a474c]'
                        />
                        Name */} Name
                        <button onClick={()=>sortBy('name')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                    </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>
                        Mobile
                        <button onClick={()=>sortBy('mobile')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                     </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>Status
                    <button onClick={()=>sortBy('status')}>
                        <FontAwesomeIcon className='ms-1.5 text-lg' icon={faSort} />
                        </button>
                    </td>
                    <td className=' min-w-48 border-r  col-span-2 py-3'>Groups</td>               
                    <td className=' min-w-48 border-r  col-span-2 py-3'>Action</td>               
          
                </tr>
                {/* Contacts Data */}
                <div className='min-h-80 font-sans max-h-[400px]'>
                      {paginatedData.length>0 &&  paginatedData.map((a,ind)=>{
                      
                        return (
                        <>
                        <tr key={ind} className='bg-white w-full flex   font-normal text-slate-900'>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.name} </td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.mobile}</td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>{a.status}</td>
                          <td
                            title={a.groups.map((b) => b.name).join(', ')} 
                            className='col-span-2 hover:whitespace-normal hover:z-1 border p-1.5 text-center w-48 text-sm truncate'
                          >
                            {a.groups.map((b) => b.name).join(', ')} 
                          </td>
                          <td className='col-span-2 border p-1.5 text-center min-w-48'>
                              <button onClick={()=>handleEdit(a._id)} className='mx-2'>
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </button>
                              <button onClick={()=>handleDelete(a._id)} className='mx-2'>
                                <FontAwesomeIcon icon={faTrashCan} />
                              </button>
                                {/* <button
                                    id="basic-button"
                                    className='text-xs border p-1 font-semibold rounded-lg px-1.5'
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={(e)=>handleClick(e,a._id)}
                                >
                                Action 
                                <FontAwesomeIcon className='ps-1 text-xs' icon={faChevronCircleDown}/>
                                </button>
                                <Menu
                                    // id="basic-menu"
                                    className='text-sm'
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem className=' text-xs hover:text-[#0a474c]' onClick={()=>handleEdit(action)}>
                                        Edit 
                                    </MenuItem>
                                    <MenuItem className=' hover:text-[#0a474c]' onClick={()=>handleDelete(action)}>Delete</MenuItem>
                                </Menu> */}
                          </td>
                        </tr>
                        </>
                      )})}
                </div>
       </table>
    </>
  );
};

export default Table;
