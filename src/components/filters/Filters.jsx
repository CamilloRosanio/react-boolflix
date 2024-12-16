// COMPONENTS IMPORT
import FilterSelect from "./FilterSelect";
import SearchBar from "./SearchBar";


// COMPONENT EXPORT

export default function Filters() {
    return <>
        <div className='filters debug'>
            <FilterSelect />
            <SearchBar />
        </div>
    </>
}