// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [val,setVal]=useState([1,2,3,4,5,6])

//   return (
//     <div className='p-5'>
//         {val.map(item=><h1>{item}</h1>)}
//         <button onClick={()=>setVal(()=>val.filter((item,index)=> index!=val.length - 1))} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>remove item</button>
      
//     </div>
//   )
// }

// export default App


// removing 3
// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [val,setVal]=useState([1,2,3,4,5,6])

//   return (
//     <div className='p-5'>
//         {val.map(item=><h1>{item}</h1>)}
//         <button onClick={()=>setVal(()=>val.filter((item,index)=> index!=2))} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>remove item</button>
      
//     </div>
//   )
// }

// export default App
// divisible by 2 removed
// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [val,setVal]=useState([1,2,3,4,5,6])

//   return (
//     <div className='p-5'>
//         {val.map(item=><h1>{item}</h1>)}
//         <button onClick={()=>setVal(()=>val.filter((item)=> item%2!==0))} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>remove item</button>
      
//     </div>
//   )
// }

// export default App

// adding 7 in Array
// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [val,setVal]=useState([1,2,3,4,5,6])

//   return (
//     <div className='p-5'>
//         {val.map(item=><h1>{item}</h1>)}
//         <button onClick={()=>setVal([...val,7])} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>click</button>
      
//     </div>
//   )
// }

// export default App

// change age of anu

import React from 'react'
import { useState } from 'react'

function App() {
    const [val,setVal]= useState([{name:"anu",age:19}, {name:"vishwajeet",age:21}, {name:"akanksha",age:24}]);

  return (
    <div className='p-5'>
        {val.map((item)=> (
          <div>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
          </div> 
        ))}
        <button
         onClick={()=>setVal(()=>val.map(item=>item.name==="akanksha" ? ({name:"akanksha",age:20}) : item))} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>click</button>
      
    </div>
  )
}

export default App