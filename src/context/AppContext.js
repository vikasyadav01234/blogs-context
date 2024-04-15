import { createContext, useState } from "react";


export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
}