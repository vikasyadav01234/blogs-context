import React from 'react'
import Header from '../components/Header'
import { useNavigation } from 'react-router-dom'

const TagPage = () => {
    const navigation = useNavigation
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
                Blogs Tagged
            </h2>

        </div>
    </div>
  )
}

export default TagPage