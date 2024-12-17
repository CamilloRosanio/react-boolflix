// COMPONENTS IMPORT
import FilterSelect from "./FilterSelect";
import SearchBar from "./SearchBar";


// CONTEXTS IMPORT
import { useGlobalContext } from "../../contexts/GlobalContext";


// COMPONENT EXPORT

export default function Filters(fetch1, fetch2) {

    // IMPORT CONTEXT
    const { crudIndexMovies, crudIndexSeries } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        crudIndexMovies();
        crudIndexSeries();
    };

    return <>
        <form className='filters debug' onSubmit={handleSubmit}>
            <FilterSelect />
            <SearchBar />

            <button className="button">Search</button>
        </form>
    </>
}