import React from 'react';
import { useState } from 'react';

function App() {
    const [val, setVal] = useState(100);

    return (
        <div className='p-4'>
            <h1>{val}</h1>
            <button onMouseMoveCapture={()=>setVal(prev=>prev+5)} className='px-20 py-10 mt-2 rounded-full text-xs bg-blue-500 text-black'>Add karo</button>
        </div>
    );  
}

export default App;