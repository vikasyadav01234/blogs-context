import React, { useContext } from "react";
import {AppContext} from '../context/AppContext'
import Spinner from "./Spinner"

const Blogs = () => {
    //cansume
    


    const {loading} = useContext(AppContext)
    return (
        <div>
            {
                loading ? (<Spinner/>) : ()
            }
        </div>
    )
}
export default Blogs