// COMPONENTS IMPORT
import Filters from "./filters/Filters";


// COMPONENT EXPORT

export default function Header() {
    return <>
        <div className='mainBar debug'>
            <h1 className="">Boolflix</h1>

            <Filters />

        </div>
    </>
}