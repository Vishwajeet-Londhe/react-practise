import React from 'react';
import { useState } from 'react';

function App() {
    const [score, setScore] = useState(108000);

    return (
        <div>
            {score}
        </div>
    );  
}

export default App;