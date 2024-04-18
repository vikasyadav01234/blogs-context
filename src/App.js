import Header from "./components/Header";
import Blogs from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Routes } from "react-router-dom";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect( () => {
    fetchBlogPosts();
  },[]);
  return (
    <Routes>
      
    </Routes>
  )
}
