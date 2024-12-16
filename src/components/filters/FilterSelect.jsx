// UTILITY
import { useState } from 'react';



// COMPONENT EXPORT

export default function FilterSelect() {

    const [selectValue, setselectValue] = useState('');

    const handleInputChange = (e) => {
        const newselectValue = e.target.value;
        setselectValue(newselectValue);
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