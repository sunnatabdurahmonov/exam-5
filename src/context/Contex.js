
import { createContext} from "react";
import { useState } from "react";


export const SectionContext = createContext()

export const SectionContextProvider = ({children}) => {
const [loading,setLoading] = useState(true)
const [token,setToken] = useState(localStorage.getItem("token"))
const [state,setState] = useState([])


const info = {
    state,
    setState,
    token,
    setToken,
    loading,
    setLoading
}
return(
    <SectionContext.Provider value={info}>
        {children}
    </SectionContext.Provider>
)
}