import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
  const {page} =useContext(AppContext)
    
  return (
    <div>
      <div>
        {
          <button>
            Previous
          </button>
        }
      </div>
    </div>
  )
}
export default Pagination;