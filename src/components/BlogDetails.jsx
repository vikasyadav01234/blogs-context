import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = () => {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
    </div>
  )
}

export default BlogDetails