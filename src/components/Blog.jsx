import React, { useContext } from "react";
import {AppContext} from '../context/AppContext'
import Spinner from "./Spinner"

const Blogs = () => {
    //cansume
    


    const {posts, loading} = useContext(AppContext)
    return (
        
        <div>
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? (<div>
                        <p>No Post Found</p>
                    </div>) : (posts.map( (post) => (
                        <div>
                            <p>{post.title}</p>
                            <p>
                                By <span>{post.author}</span> on <span>{post.category}</span>
                            </p>
                            <p>Posted on {post.date}</p>
                        </div>
                    )))
                )
            }
        </div>
    )
}
export default Blogs