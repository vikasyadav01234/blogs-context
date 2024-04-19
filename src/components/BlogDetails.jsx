import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = () => {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
        <p>
            By
            <span>{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
    </div>
  )
}

export default BlogDetails