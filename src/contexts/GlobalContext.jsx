// # UTILITY
import { createContext, useContext, useState, useEffect } from 'react';


// # ENV IMPORTS
const apiKey = import.meta.env.VITE_API_THEMOVIEDB_APIREADACCESSTOKEN;
const apiURL = import.meta.env.VITE_API_THEMOVIEDB_APIURL;


// # COMPONENTS IMPORT

// # CONTEXT VARIABLE
const GlobalContext = createContext();


// # PROVIDER EXPORT

export const GlobalContextProvider = ({ children }) => {

    // USE-STATE FETCH DATA
    const [fetchMovies, setFetchMovies] = useState([]);

    // INIT USE-EFFECT
    useEffect(() => {
        crudIndexMovies();
        console.log('INIT GlobalContext useEffect executed.')
    }, []);

    const crudIndexMovies = () => {
        const url = 'https://api.themoviedb.org/3/search/movie?query=harry&language=it_IT';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log('CRUD: Index (Fetch Movies) executed.');
                console.log(json);
                const updateFetchMovies = json.results;
                setFetchMovies(updateFetchMovies);
            })
            .catch(err => console.error(err));
    }

    // Dichiaro lo USE-STATE dei VALUE degli inputs
    const [selectValue, setSelectValue] = useState("");
    const [searchbarValue, setSearchbarValue] = useState("");

    // Dichiaro le funzioni per aggiornare lo USE-STATE dei VALUE degli inputs
    const updateSelectValue = (newSelect) => {
        setSelectValue(newSelect);
        // console.log('New VALUE Select: ' + selectValue);
    };
    const updateSearchbarValue = (newTerm) => {
        setSearchbarValue(newTerm);
        // console.log('New VALUE Searchbar: ' + searchbarValue);
    };

    // USE-STATE DATA
    const globalData = {
        selectValue,
        searchbarValue,
        updateSelectValue,
        updateSearchbarValue,

        fetchMovies,
    };

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