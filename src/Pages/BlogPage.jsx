import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from "../components/Header"

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigation();
    const {setLoading, loading} = useContext(AppContext);

    async function fetchRelatedBlogs(){
        setLoading(true)
        let url = `${baseUrl}?blogId=${blogId}`;
        try{
          const res = await fetch(url);
          const data = await res.json();
          setBlog(data.blog);
          setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
          console.log("Error aagya in blog id wali call");
          setBlog(null);
          setRelatedBlogs([]);
        }
        setLoading(false);

    }
    useEffect( () => {
      if(blogId) {
        fetchRelatedBlogs();
      }
    },[location.pathname])
  return (
    <div>
      <Header/>
    </div>
  )
}

export default BlogPage