import React from 'react';
import { useState } from 'react';

function App() {
    const [score, setScore] = useState(108000);

    return (
        <div className='p-4'>
            <h1>{score}</h1>
            <button onClick={()=>setScore(200)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-black'>Change</button>
        </div>
    );  
}

export default App;