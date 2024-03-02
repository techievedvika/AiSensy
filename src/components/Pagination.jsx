import React from 'react'

const Pagination = (props) => {
    let {currentPage,itemsPerPage,totalPages,handleChange,prevPage,nextPage}=props;
    const entriesArr = [25,50,100];
  return (
    <div className='flex justify-between'>
              <div className='flex text-sm'>
                <span>Page {currentPage + 1} of {totalPages || 1}</span>
              </div>
                {/* <div>
                    <select
                        className='text-gray-500 font-medium text-sm p-1 border rounded-md  focus:border-none '
                        value={itemsPerPage}
                        onChange={handleChange}
                    >
                        {entriesArr.map((a)=>(
                            <option key={a} value={a}>{a} per page</option>
                        ))}
                    </select>
                </div> */}
              <div>
                <button className='text-gray-600 disabled:border-gray-300 text-sm hover:opacity-85 font-semibold border disabled:text-gray-400 border-gray-500 mx-2 p-1.5 rounded-md' onClick={prevPage} disabled={currentPage === 0}>
                  {'<'}
                </button>
                <span className='border p-1 border-gray-400 rounded-md px-2'>{currentPage+1}</span>
                <button 
                  className='text-gray-600 disabled:border-gray-300 text-sm hover:opacity-85 font-semibold border disabled:text-gray-400 border-gray-500 mx-2 p-1.5 rounded-md' onClick={nextPage} 
                  disabled={currentPage == totalPages || currentPage==(totalPages-1) }
                  >
                  {'>'}
                </button>
              </div>
     </div>
  )
}

export default Pagination
