import React, {createContext, useContext, useState} from "react";

const GlobalContext = createContext();

const GlobalProvider = (children) => {
    const [globalState, setGlobalState] = useState('init value');

    return (
        <GlobalContext.Provider value={{globalState, setGlobalState}}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export default GlobalProvider;