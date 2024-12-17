// # UTILITY
import { useState, useEffect } from 'react';

const publicApiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDQxMDU5ZGFhY2VjNzI3NjExOTQzNjIzNGQ0MTFmOCIsIm5iZiI6MTczNDM0NTU3MC4zMTAwMDAyLCJzdWIiOiI2NzYwMDM2MmZiY2E4ZTMxNmVhYjBkMGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Pte0cJtbEFRK7t9bfKQygSQqa9xCSpkP__UcO0PBLjU';


// CONTEXTS IMPORT
// Importo il CONTEXT che devo aggiornare tramite questo input
import { useGlobalContext } from '../../contexts/GlobalContext';


// COMPONENT EXPORT

export default function FilterSelect() {

    // INIT USE-EFFECT
    useEffect(() => {
        fetchCategories();
        // console.log('INIT FilterSelect useEffect executed.')
    }, []);

    // Destrutturo il CONTEXT prendendo solo la FUNCTION (dal CONTEXT) che aggiorna il valore relativo a questo input e altri dati se necessari
    const { updateSelectValue } = useGlobalContext();

    // USE-STATE FETCH DATA
    const [movieCategories, setMovieCategories] = useState([]);
    const [seriesCategories, setSeriesCategories] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    // FETCH CATEGORIES
    const fetchCategories = async () => {

        const urlCatMovies = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
        const optionsCatMovies = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${publicApiKey}`
            }
        };

        fetch(urlCatMovies, optionsCatMovies)
            .then(res => res.json())
            .then(json => {
                // console.log('CRUD: Index (Fetch Categories - MOVIES) executed.');
                // console.log(json.genres);
                const updateMovieCategories = json.genres;
                setMovieCategories(updateMovieCategories);
            })
            .catch(err => console.error(err));


        const urlCatSeries = `https://api.themoviedb.org/3/genre/tv/list?language=en`;
        const optionsCatSeries = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${publicApiKey}`
            }
        };

        await fetch(urlCatSeries, optionsCatSeries)
            .then(res => res.json())
            .then(json => {
                // console.log('CRUD: Index (Fetch Categories - SERIES) executed.');
                // console.log(json.genres);
                const updateSeriesCategories = json.genres;
                setSeriesCategories(updateSeriesCategories);
            })
            .catch(err => console.error(err));
    }

    // Dichiaro la funzione triggerata da ON-CHANGE, che esegue la funzione presa dal CONTEXT che a sua volta aggiorna il valore del CONTEXT riguardante questo input
    const handleInputChange = (e) => {
        updateSelectValue(e.target.value);
    }

    // RETURN
    return <>
        <select name="FilterSelect" id="FilterSelect" onChange={handleInputChange} className='input'>
            <option value="">Select Category</option>
            <option value="test">TEST</option>
            {/* {allCategories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)} */}
        </select>
    </>
};