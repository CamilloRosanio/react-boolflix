// # UTILITY
import { createContext, useContext, useState, useEffect } from 'react';


// # ENV IMPORTS
const apiKey = import.meta.env.VITE_API_THEMOVIEDB_APIKEY;
const apiURL = import.meta.env.VITE_API_THEMOVIEDB_APIURL;


// # COMPONENTS IMPORT

// # CONTEXT VARIABLE
const GlobalContext = createContext();


// # PROVIDER EXPORT

export const GlobalContextProvider = ({ children }) => {

    // Dichiaro lo USE-STATE dei VALUE degli inputs
    const [selectValue, setSelectValue] = useState("");
    const [searchbarValue, setSearchbarValue] = useState("");

    // Dichiaro le funzioni per aggiornare lo USE-STATE dei VALUE degli inputs
    const updateSelectValue = (newSelect) => {
        setSelectValue(newSelect);
        console.log('New VALUE: ' + selectValue);
    };
    const updateSearchbarValue = (newTerm) => {
        setSearchbarValue(newTerm);
        console.log('New VALUE: ' + searchbarValue);
    };

    // USE-STATE DATA
    const globalData = {
        selectValue,
        searchbarValue,
        updateSelectValue,
        updateSearchbarValue,
    };

    // INIT USE-EFFECT
    useEffect(() => {
        console.log('INIT GlobalContext useEffect executed.')
    }, []);

    // RETURN
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