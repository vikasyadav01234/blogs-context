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
        
        <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7">
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? (<div>
                        <p>No Post Found</p>
                    </div>) : (posts.map( (post) => (
                        <div key={post.id}>
                            <p className="font-bold text-xs">{post.title}</p>
                            <p className="text-[10px]">
                                By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                            </p>
                            <p className="text-[10px]">Posted on {post.date}</p>
                            <p className="text-[11px] mt-[10px]">{post.content}</p>
                            <div className="flex gap-x-3">
                                {post.tags.map((tag, index) => {
                                    return <span key={index} className="text-blue-500 underline font-bold text-[8px]">{`#${tag}`}</span>
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