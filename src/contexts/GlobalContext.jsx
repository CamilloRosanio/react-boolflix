// # UTILITY
import { createContext, useContext, useState, useEffect } from 'react';


// ENV IMPORTS
const apiKey = import.meta.env.VITE_API_THEMOVIEDB_APIKEY;
const apiURL = import.meta.env.VITE_API_THEMOVIEDB_APIURL;


// # CONTEXT VARIABLE
const GlobalContext = createContext();


// # PROVIDER EXPORT

export const GlobalContextProvider = ({ children }) => {

    // // USE-STATE DATA
    const [globalData, setGlobalData] = useState({
        array: [],
    });

    // INIT USE-EFFECT
    useEffect(() => {
        console.log('INIT useEffect executed.')
    }, []);

    return <>
        <GlobalContext.Provider value={globalData}>{children}</GlobalContext.Provider>
    </>
}


// # USE-CONTEXT EXPORT
export const useGlobalContext = () => useContext(GlobalContext);









// FETCH

// const url = `${apiURL}`;
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${apiKey}`
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(json => {
//         console.log('FETCH executed at:');
//         console.log(`${apiURL}`);
//     })
//     .catch(err => console.error(err));