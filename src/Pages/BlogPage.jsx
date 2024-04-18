import React, { useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigation();
  return (
    <div>
        
    </div>
  )
}

export default BlogPage