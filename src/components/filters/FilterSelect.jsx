// CONTEXTS IMPORT
// Importo il CONTEXT che devo aggiornare tramite questo input
import { useGlobalContext } from '../../contexts/GlobalContext';



// COMPONENT EXPORT

export default function FilterSelect() {

    // Destrutturo il CONTEXT prendendo solo la FUNCTION (dal CONTEXT) che aggiorna il valore relativo a questo input
    const { updateSelectValue, selectValue } = useGlobalContext();

    // Dichiaro la funzione triggerata da ON-CHANGE, che esegue la funzione presa dal CONTEXT che a sua volta aggiorna il valore del CONTEXT riguardante questo input
    const handleInputChange = (e) => {
        updateSelectValue(e.target.value);
    }

    return <>
        <select name="FilterSelect" id="FilterSelect" onChange={handleInputChange} className='input'>
            <option value="">Select Category</option>
            <option value="Test Option 1">Test Option 1</option>
            <option value="Test Option 2">Test Option 2</option>
            <option value="Test Option 3">Test Option 3</option>
        </select>
    </>
};