import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'

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
    </div>
  )
}

export default TagPage