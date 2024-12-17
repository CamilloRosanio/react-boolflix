// # UTILITY
import { createContext, useContext, useState, useEffect } from 'react';


// # ENV IMPORTS
const apiKey = import.meta.env.VITE_API_THEMOVIEDB_APIREADACCESSTOKEN;
const apiURL = import.meta.env.VITE_API_THEMOVIEDB_APIURL;


// # CONTEXT VARIABLE
const GlobalContext = createContext();


// # PROVIDER EXPORT

export const GlobalContextProvider = ({ children }) => {

    // INIT USE-EFFECT
    useEffect(() => {
        crudIndexMovies();
        crudIndexSeries();
        console.log('INIT GlobalContext useEffect executed.')
    }, []);

    // USE-STATE FETCH DATA
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    /*****************************************************************
    # INPUTS USE STATE - START
    *****************************************************************/

    // Dichiaro lo USE-STATE dei VALUE degli inputs
    const [selectValue, setSelectValue] = useState("");
    const [searchbarValue, setSearchbarValue] = useState("harry");

    // Dichiaro le funzioni per aggiornare lo USE-STATE dei VALUE degli inputs
    const updateSelectValue = (newSelect) => {
        setSelectValue(newSelect);
        // console.log('New VALUE Select: ' + selectValue);
    };
    const updateSearchbarValue = (newTerm) => {
        setSearchbarValue(newTerm);
        // console.log('New VALUE Searchbar: ' + searchbarValue);
    };

    /*****************************************************************
    # INPUTS USE STATE - END
    *****************************************************************/

    // FETCH MOVIES
    const crudIndexMovies = () => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${searchbarValue}&language=it_IT`;
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
                console.log(json.results);
                const updateMovies = json.results;
                setMovies(updateMovies);
            })
            .catch(err => console.error(err));
    }

    // FETCH SERIES
    const crudIndexSeries = () => {
        const url = `https://api.themoviedb.org/3/search/tv?query=${searchbarValue}&language=it_IT`;
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
                console.log('CRUD: Index (Fetch Series) executed.');
                console.log(json.results);
                const updateSeries = json.results;
                setSeries(updateSeries);
            })
            .catch(err => console.error(err));
    }

    // USE-STATE DATA
    const globalData = {
        selectValue,
        searchbarValue,
        updateSelectValue,
        updateSearchbarValue,
        crudIndexMovies,
        crudIndexSeries,
        movies,
        series,
    };

    // RETURN
    return <>
        <GlobalContext.Provider value={globalData}>{children}</GlobalContext.Provider>
    </>
}


// # USE-CONTEXT EXPORT
export const useGlobalContext = () => useContext(GlobalContext);