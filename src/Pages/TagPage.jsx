import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'
import Blogs from '../components/Blog';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigation();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div>
            <button
            onClick={()=> navigation(-1)}
            >
                back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>

        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage