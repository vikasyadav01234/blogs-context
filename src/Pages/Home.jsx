import React from 'react'
import Blogs from '../components/Blog'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='w-11/12'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
