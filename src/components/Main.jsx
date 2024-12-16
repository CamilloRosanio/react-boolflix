// CONTEXTS IMPORT
import { useGlobalContext } from "../contexts/GlobalContext";


// COMPONENTS IMPORT
import ResultSection from "../components/ResultSection";


// COMPONENT EXPORT

export default function Main() {

    // IMPORT CONTEXT
    const { searchbarValue } = useGlobalContext();

    return <>
        <main>
            <ResultSection sectionTitle='Movies' />
            <ResultSection sectionTitle='Series' />
        </main>
    </>
}