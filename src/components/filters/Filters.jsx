// COMPONENTS IMPORT
import FilterSelect from "./FilterSelect";
import SearchBar from "./SearchBar";


// COMPONENT EXPORT

export default function Filters() {

    return <>
        <form className='filters debug'>
            <FilterSelect />
            <SearchBar />

            <button className="button">Search</button>
        </form>
    </>
}