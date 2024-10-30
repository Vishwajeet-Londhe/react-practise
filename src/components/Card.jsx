import React from 'react';
import { useState } from 'react';

function App() {
    const [val, setVal] = useState({name: "vishwajeet", isBlocked: "True"});

    return (
        <div className='p-4'>
            <h1>name : {val.name}</h1>
            <h2>blocked : {val.isBlocked.toString()}</h2>
            <button onClick={()=>setVal({...val, isBlocked: !val.isBlocked})} className={`px-2 py-1 mt-2 rounded-full text-x ${val.isBlocked ? "bg-blue-500" : "bg-red-500"} text-black`}>Kya mein block hu ?</button>
        </div>
    );  
}

export default App;