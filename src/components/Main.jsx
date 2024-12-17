// UTILITY
const keyRootMovies = "movie_";
const keyRootSeries = "serie_";


// # ENV IMPORTS
const apiImg = import.meta.env.VITE_API_THEMOVIEDB_POSTERSURL;


// COMPONENTS IMPORT
import ResultSection from "../components/ResultSection";
import Card from "./Card";


// CONTEXTS IMPORT
import { useGlobalContext } from "../contexts/GlobalContext";


// COMPONENT EXPORT

export default function Main() {

    // IMPORT CONTEXT
    const { movies, series, searchbarValue, selectValue } = useGlobalContext();

    return <>
        <main>

            <h3 id="researchRecap">{searchbarValue ? `Hai cercato: "${searchbarValue}"` : ''}</h3>

            {/* RESULTS - MOVIES */}
            <ResultSection
                key={keyRootMovies}
                sectionTitle='Movies'
            >
                {movies.map(item =>
                    <Card
                        key={keyRootMovies + item.id}
                        img={apiImg + item.poster_path}
                        title={item.title}
                        original_title={item.original_title}
                        vote={item.vote}
                        description={item.overview.slice(0, 50) + '..'}
                    />
                )}
            </ResultSection>

            {/* RESULTS - SERIES */}
            <ResultSection
                key={keyRootSeries}
                sectionTitle='Series'
            >
                {series.map(item =>
                    <Card
                        key={keyRootMovies + item.id}
                        img={apiImg + item.poster_path}
                        title={item.name}
                        original_title={item.original_name}
                        vote={item.vote}
                        description={item.overview.slice(0, 70) + '..'}
                    />
                )}
            </ResultSection>

        </main >
    </>
}