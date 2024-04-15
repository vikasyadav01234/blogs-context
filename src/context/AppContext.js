import { createContext, useState } from "react";

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
        let url =
        try{
            const result = await fetch(url);
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