import { createContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => {}
})

export default function UserProvider({children})
{
    const [user, setUser] = useState(null)


    useEffect(()=>{

        const user = localStorage.getItem("user")
        setUser(JSON.parse(user))
    },[])


    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}