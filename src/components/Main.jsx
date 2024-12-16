// COMPONENTS IMPORT
import ResultSection from "../components/ResultSection";


// CONTEXTS IMPORT
import { useGlobalContext } from "../contexts/GlobalContext";


// COMPONENT EXPORT

export default function Main() {

    // IMPORT CONTEXT
    const { fetchMovies } = useGlobalContext();

    return <>
        <main>

            {/* MAPPING DI TEST */}
            {fetchMovies.map((movie, index) => <p key={movie.id}>{movie.title}</p>)}

            <ResultSection sectionTitle='Movies' />
            <ResultSection sectionTitle='Series' />
        </main>
    </>
}