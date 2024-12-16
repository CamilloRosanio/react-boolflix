// UTILITY
import { useState } from 'react';



// COMPONENT EXPORT

export default function SearchBar() {

    const [Data, setData] = useState('');

    const handleInputChange = (e) => {
        const newData = e.target.value;
        setData(newData);

        console.log(Data);
    }

    return <>
        <input type="text" className="input" id='SearchBar' placeholder="Type here to search" value={Data} onChange={handleInputChange} />
    </>
}