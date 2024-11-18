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

// change age of akanksha

// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [val,setVal]= useState([{name:"anu",age:19}, {name:"vishwajeet",age:21}, {name:"akanksha",age:24}]);

//   return (
//     <div className='p-5'>
//         {val.map((item)=> (
//           <div>
//             <h1>{item.name}</h1>
//             <h2>{item.age}</h2>
//           </div> 
//         ))}
//         <button
//          onClick={()=>setVal(()=>val.map(item=>item.name==="akanksha" ? ({name:"akanksha",age:20}) : item))} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>click</button>
      
//     </div>
//   )
// }

// export default App

// if val == false print "bahar jaao" & if val == true print "maat jaao na"

// import React from 'react'
// import { useState } from 'react'

// function Card() {
//   const[val,setVal]=useState(false);
//   return (
//     <div>
//       <h1>
//         {val===false ? "BAHAAR jaao" : "MAAT jaao Na"}
//       </h1>
//       <button onClick={()=>setVal (()=>!val)} className='px-2 py-1 bg-blue-500 rounded-full'>Change krr be </button>
      
//     </div>
//   )
// }

// export default Card

// img change

  // import React, { useState } from 'react'
  // import { FaArrowRightLong } from "react-icons/fa6";

  // function Card() {
  //   const [val,setVal] = useState(false)
  //   return (
  //     <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
  //       <div className='relative w-96 h-60 bg-zinc-500 rounded-lg flex overflow-hidden'>
  //         <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1730484976453-c6657e01df5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  //         <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  //         <span onClick={()=>setVal(()=>!val)} className='w-10 h-10 flex justify-center items-center rounded-full bg-[#dadada7b] bg-zinc-700 absolute bottom-10 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
  //           <FaArrowRightLong size={".8em"}/>
  //         </span> 
          
  //       </div>
        
  //     </div>
  //   )
  // }

  // export default Card

// 101.passing data via props
  // import React from 'react'
  
  // function Card({text, color}) {
  //   return (
  //     <div>
  //       <button className={`px-3 py-2 ${color} text-zinc-100 text-xs rounded-full m-2`}>{text}</button>
  //     </div>
  //   )
  // }
  
  // export default Card
  
  import React from 'react'
  
  function Card({image}) {
    return (
      <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-sky-200'>
          <img className='w-full h-full object-cover object-top' src={image} alt="" />
        </div>
        <div className='w-full p-3'>
          <h3 className='text-xl font-semibold'>Vishwajeet</h3>
          <h5 className='text-xs'>Profession</h5>
          <button className='mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>Add Frined</button>
        </div>

        
      </div>
    )
  }
  
  export default Card
  