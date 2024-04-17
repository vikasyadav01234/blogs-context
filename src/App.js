import Header from "./components/Header";
import Blogs from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext } from "react";

export default function App() {
  const {fetchBlogPosts} = useContext
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}
