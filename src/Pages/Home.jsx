import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blog'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
        <Header/>
        <div>
            <Blogs/>
            
            <Pagination/>
        </div>

    </div>
  )
}

export default Home