import React, { useContext } from "react";
import {AppContext} from '../context/AppContext'
import Spinner from "./Spinner"
import "./Blog.css";
const Blogs = () => {
    //cansume
    
    const {posts, loading} = useContext(AppContext);
    console.log("Printing inside Blog ");
    console.log(posts);
    return (
        
        <div className="w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center">
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? (<div>
                        <p>No Post Found</p>
                    </div>) : (posts.map( (post) => (
                        <div key={post.id}>
                            <p className="font-bold text-lg">{post.title}</p>
                            <p className="text-sm mt-[4px]">
                                By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                            </p>
                            <p className="text-md mt-[4px]">Posted on {post.date}</p>
                            <p className="text-sm mt-[14px]">{post.content}</p>
                            <div className="flex gap-x-3">
                                {post.tags.map((tag, index) => {
                                    return <span key={index} className="text-blue-500 underline font-bold text-xs mt-[4px]">{`#${tag}`}</span>
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