'use client'
import { api } from "@/service/api";
import { IUserLogin, IProviderProps } from "@/types";
import { setCookie } from "nookies";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface AuthProviderData {
  login: (userData: IUserLogin) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}: IProviderProps)=>{
    const router =useRouter()
    const login = (userData: IUserLogin) =>{
        api.post("/api/login", userData)
        .then((res) => {
            setCookie(null, "SisCount.token", res.data.token, { maxAge: 60 * 30, path: "/"})
            toast.success("Login realizado com sucesso!", {
                position: toast.POSITION.TOP_RIGHT,
              });
              router.push("/dash")
        })
        .catch((err)=>{
            console.log(err)
            toast.error("email ou senha inválidos", {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
    }
    return (
       <AuthContext.Provider value={{login}}>
            {children}
       </AuthContext.Provider> 
    )
}

export const useAuth = () => useContext(AuthContext)