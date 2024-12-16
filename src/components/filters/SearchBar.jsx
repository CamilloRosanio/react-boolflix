// CONTEXTS IMPORT
// Importo il CONTEXT che devo aggiornare tramite questo input
import { useGlobalContext } from '../../contexts/GlobalContext';



// COMPONENT EXPORT

export default function SearchBar() {

    // Destrutturo il CONTEXT prendendo solo la FUNCTION (dal CONTEXT) che aggiorna il valore relativo a questo input
    const { updateSearchbarValue, searchbarValue } = useGlobalContext();

    // Dichiaro la funzione triggerata da ON-CHANGE, che esegue la funzione presa dal CONTEXT che a sua volta aggiorna il valore del CONTEXT riguardante questo input
    const handleInputChange = (e) => {
        updateSearchbarValue(e.target.value);
    }

    return <>
        <input type="text" className="input" id='SearchBar' placeholder="Type here to search" value={searchbarValue} onChange={handleInputChange} />
    </>
};