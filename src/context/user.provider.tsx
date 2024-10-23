"use client"
import { getCurrentUser } from "@/services/authService/user";
import { TUser } from "@/types";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";


type IUserProviderValues = {
    user: TUser | undefined | null;
    isloading: boolean | undefined;
    setIsloading: Dispatch<SetStateAction<boolean>>
    setUser: (user: TUser | null) => void;
}
const UserContext = createContext<IUserProviderValues | undefined>(undefined);


export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<TUser | null>(null)
    const [isloading, setIsloading] = useState<boolean>(true)

    const handleUser = async () => {
        const user = await getCurrentUser();
        setUser(user)
        setIsloading(false)
    }
    useEffect(() => {
        handleUser()
    }, [isloading])


    return <UserContext.Provider value={{ user, setUser, isloading, setIsloading }}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUser should be invoked inside the wraper boundary or application")
    }
    return context
}