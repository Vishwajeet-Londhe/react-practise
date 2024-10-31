import React from 'react'
import { useState } from 'react'

function App() {
    const [val, setVal] = useState({name:"Vishwajeet", age:19});
  
    return (
        <div>
            <button onClick={async ()=>{
                await setVal({...val, gender: "male"});
                await console.log(val);
            }}>click</button>
        </div>
    )
}

export default App
