import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'

const CategoryPage = () => {
    const navigation = useNavigation();
    const location = useLocation ();
  return (
    <div>
        <Header/>
        <div>
            <button
            onClick={() => navigation(-1)}
            >
                Back
            </button>
        </div>
    </div>
  )
}

export default CategoryPage