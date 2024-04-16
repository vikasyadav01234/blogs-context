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
                        <p></p>
                    </div>) : ()
                )
            }
        </div>
    )
}
export default Blogs