import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
    const {page, handlePageChange, totalPages} =useContext(AppContext)
    
  return (
    <div className='w-full'>
      <div className='flex justify-between w-0'>
        { page >1 &&
          (
            <button onClick={() => handlePageChange(page-1)}
            className='rounded-md border px-4 py-1'
            >
            Previous
            </button>
          )
        }
        { page < totalPages &&
          (
            <button onClick={() => handlePageChange(page+1)}
            className='rounded-md border px-4 py-1'
            >
              Next
            </button>
          )
        }
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}
export default Pagination;