import { createContext, useState } from "react";

export const CurrentUserContext = createContext({
    setCurrentUser: () => {},
    currentUser: {},
});

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
};
