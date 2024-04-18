import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'

const CategoryPage = () => {
    const navigation = useNavigation();
    const location = useLocation ();
    const category = location.pathname.split("/").at(-1);
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