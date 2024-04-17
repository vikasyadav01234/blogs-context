import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
  const {page, handlePageChange} =useContext(AppContext)
    
  return (
    <div>
      <div>
        { page >1 &&
          (
            <button onClick={() => handlePageChange(page-1)}>
            Previous
            </button>
          )
        }
        {
          (
            <button onClick={()= handlePageChange(page+1)}>
              Next
            </button>
          )
        }
      </div>
    </div>
  )
}
export default Pagination;