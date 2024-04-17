import Header from "./components/Header";
import Blogs from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}
