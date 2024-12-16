// UTILITY
import { useState } from 'react';



// COMPONENT EXPORT

export default function FilterSelect() {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        const newInputValue = e.target.value;

        setInputValue(newInputValue);

        console.log(`INPUT Filter Select value set to: ${inputValue}`);
    }

    return <>
        <select name="FilterSelect" id="FilterSelect" onChange={handleInputChange} className='input'>
            <option value="">Select Category</option>
            <option value="Test Option 1">Test Option 1</option>
            <option value="Test Option 2">Test Option 2</option>
            <option value="Test Option 3">Test Option 3</option>
        </select>
    </>
}