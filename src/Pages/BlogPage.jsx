import React, { useContext, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigation();
    const {setLoading, loading} = useContext(AppContext);

    async function fetchRelatedBlogs(){
        setLoading(true)
        let url = `${baseUrl}?blogId=${blogId}`;
        
    }
  return (
    <div>
      
    </div>
  )
}

export default BlogPage