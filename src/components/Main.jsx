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

    // FORMAT VOTE TO STARS
    const voteToStars = (item) => {
        if (Math.round(item.vote_average) == 1 || Math.round(item.vote_average) == 2) {
            return '★☆☆☆☆';
        } else if (Math.round(item.vote_average) == 3 || Math.round(item.vote_average) == 4) {
            return '★★☆☆☆';
        } else if (Math.round(item.vote_average) == 5 || Math.round(item.vote_average) == 6) {
            return '★★★☆☆';
        } else if (Math.round(item.vote_average) == 7 || Math.round(item.vote_average) == 8 || Math.round(item.vote_average) == 9) {
            return '★★★★☆';
        } else if (Math.round(item.vote_average) == 10) {
            return '★★★★★';
        };
    }

    // FORMAT SERIES COUNTRY TO FLAG
    const countryToFlag = (item) => {
        const country = item.origin_country;
        if (country == undefined || country == null) {
            return false;
        } else {
            return `https://flagsapi.com/${country}/flat/64.png`;
        }
    }

    return <>
        <main>
            <h3 id="researchRecap">{searchbarValue ? `Results for: "${searchbarValue}"` : 'Search for a movie or a Series'}</h3>

            {/* RESULTS - MOVIES */}

            <ResultSection
                key={keyRootMovies}
                sectionTitle='Movies'
            >
                {true ?
                    movies.map(item =>
                        <Card
                            key={keyRootMovies + item.id}
                            img={apiImg + item.poster_path}
                            title={item.title}
                            original_title={item.original_title}
                            vote={voteToStars(item)}
                            language={item.original_language}
                            description={item.overview.slice(0, 200) + '..'}
                        />
                    )
                    : <h3>Nessun risultato</h3>
                }
            </ResultSection>

            {/* RESULTS - SERIES */}
            <ResultSection
                key={keyRootSeries}
                sectionTitle='Series'
            >
                {true ?
                    series.map(item =>
                        <Card
                            key={keyRootMovies + item.id}
                            img={apiImg + item.poster_path}
                            title={item.name}
                            original_title={item.original_name}
                            vote={voteToStars(item)}
                            description={item.overview.slice(0, 200) + '..'}
                            country={countryToFlag(item)}
                        />
                    )
                    : <h3>Nessun risultato</h3>
                }
            </ResultSection>

        </main >
    </>
}