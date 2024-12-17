// COMPONENTS IMPORT
import ResultSection from "../components/ResultSection";
import Card from "./Card";


// CONTEXTS IMPORT
import { useGlobalContext } from "../contexts/GlobalContext";


// UTILITY
const keyRootMovies = "movie_";
const keyRootSeries = "serie_";


// COMPONENT EXPORT

export default function Main() {

    // IMPORT CONTEXT
    const { movies, series } = useGlobalContext();

    return <>
        <main>

            <ResultSection
                key={keyRootMovies}
                sectionTitle='Movies'
            >
                {movies.map(item =>
                    <Card
                        key={keyRootMovies + item.id}
                        title={item.title}
                        original_title={item.original_title}
                        vote={item.vote}
                    />
                )}
            </ResultSection>

            <ResultSection
                key={keyRootSeries}
                sectionTitle='Series'
            >
                {series.map(item =>
                    <Card
                        key={keyRootMovies + item.id}
                        title={item.name}
                        original_title={item.original_name}
                        vote={item.vote}
                    />
                )}
            </ResultSection>

        </main >
    </>
}