import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

// step1
export const AppContext = createContext();
function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null)


    //data filling pending

    async function fetchBlogPosts(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            
        }
        catch(error) {

        }
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages
    };
    //step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}