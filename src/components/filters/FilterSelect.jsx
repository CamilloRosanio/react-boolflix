// UTILITY
import { useState } from 'react';



// COMPONENT EXPORT

export default function FilterSelect() {

    const [Data, setData] = useState('');

    const handleInputChange = (e) => {
        const newData = e.target.value;
        setData(newData);

        console.log(Data);
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