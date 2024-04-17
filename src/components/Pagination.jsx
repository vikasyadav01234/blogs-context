import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
  const {page, handlePageChange} =useContext(AppContext)
    
  return (
    <div>
      <div>
        { page >1 &&
          <button>
            Previous
          </button>
        }
      </div>
    </div>
  )
}
export default Pagination;