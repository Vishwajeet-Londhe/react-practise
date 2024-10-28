import React from 'react';
import { useState } from 'react';

function App() {
    const [banned, setBanned] = useState(false);

    return (
        <div className='p-4'>
            <h1>{banned.toString()}</h1>
            <button onClick={()=>setBanned(!banned)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-black'>Ban karo</button>
        </div>
    );  
}

export default App;