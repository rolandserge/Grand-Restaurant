import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const useAuth = () => {
    
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [authState, setAuthState] = useState({ authenticated: null });

    const checkUserInformation = () => {
        const userStringfied = localStorage.getItem('user');
        const tokenStringfied = localStorage.getItem('auth');
        const user = JSON.parse(userStringfied);
        const auth = JSON.parse(tokenStringfied);
        if (user && auth) {
          setUser(user);
          setAuthState({ authenticated: true })
        } else {
            logout()
        }
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('auth')
        setAuthState({ authenticated: false });
    };

    const setSession = (data) => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    };

    const setTokenHandler = () => {
        setAuthState({ authenticated: true })
        localStorage.setItem('auth', JSON.stringify({ authenticated: true }))
    }

    useEffect(() => {
        checkUserInformation()
    }, [])

    return (
        <AuthContext.Provider 
            value={{
                user,
                setSession,
                authState,
                setTokenHandler,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}