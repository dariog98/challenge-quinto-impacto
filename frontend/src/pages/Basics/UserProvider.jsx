import { createContext, useContext, useState } from 'react'

const userContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const handleLogIn = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const handleLogOut = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    const storagedUser = localStorage.getItem('user')

    if (!user && storagedUser) {
        try {
            const userData = JSON.parse(storagedUser)
            setUser(userData)
        } catch (error) {
            //Do nothing
        }
    }

    return (
        <userContext.Provider value={{ user, handleLogIn, handleLogOut }}>
            {children}
        </userContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(userContext)
}

export { UserProvider, useUserContext }