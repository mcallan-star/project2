import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        username: '',
        password1: '',
        password2: '',
        authenticated: false,
        _id: ''
    });

    const updateUser = (name, value) => {
        setUser({ ...user, [name]: value })
    }

    return (
        <UserContext.Provider value={{ user, updateUser, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;