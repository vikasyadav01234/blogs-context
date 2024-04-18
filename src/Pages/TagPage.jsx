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
            onClick={()=> }
            >
                back
            </button>
        </div>
    </div>
  )
}

export default TagPage