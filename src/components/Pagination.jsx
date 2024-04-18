import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
    const {page, handlePageChange, totalPages} =useContext(AppContext)
    
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-2'>
        { page >1 &&
          (
            <button onClick={() => handlePageChange(page-1)}
            className='rounded-md border-2 px-4 py-1  hover:bg-red-500 hover:text-yellow-100'
            >
            Previous
            </button>
          )
        }
        { page < totalPages &&
          (
            <div className='max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg'>
            <button onClick={() => handlePageChange(page+1)}
            className='flex-1 font-bold text-xl bg-white  rounded-md hover:rounded-xl border-2 px-4 py-1 hover:bg-sky-700 hover:text-yellow-100 '
            >
              Next
            </button>
            </div>
          )
        }
        </div>
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}
export default Pagination;