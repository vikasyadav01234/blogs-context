import React, { useContext } from "react";
import {AppContext} from '../context/AppContext'
import Spinner from "./Spinner"
import "./Blog.css";
const Blogs = () => {
    //cansume
    

    const {posts, loading} = useContext(AppContext);
    console.log("Printing inside Blog ")
    console.log(posts);
    return (
        
        <div className="w-11/12 max-w-[530px]">
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? (<div>
                        <p>No Post Found</p>
                    </div>) : (posts.map( (post) => (
                        <div key={post.id}>
                            <p className="title text-3xl">{post.title}</p>
                            <p>
                                By <span>{post.author}</span> on <span>{post.category}</span>
                            </p>
                            <p>Posted on {post.date}</p>
                            <p>{post.content}</p>
                            <div>
                                {post.tags.map((tag, index) => {
                                    return <span key={index}>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    )))
                )
            }
        </div>
    )
}
export default Blogs