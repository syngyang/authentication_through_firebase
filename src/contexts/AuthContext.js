import {createContext, useContext, useEffect, useState} from 'react'
import {auth} from '../util/init-firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'


const AuthContext = createContext({
    currentUser: null,
    register:()=>Promise,
})

export const useAuth = ()=> useContext(AuthContext)

export default function AuthContextProvider({children}){
    const [currentUser, seCurrentUser]= useState(null)
    
    function register(email, password) {
        return createUserWithEmailAndPassword(auth,email, password )
    }
    const value= {
        currentUser,
        register,
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}