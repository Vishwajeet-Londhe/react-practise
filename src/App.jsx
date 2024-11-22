//101
// import React from "react";
// import Card from "./components/Card";

// function App() {
//   return (
//     <>
//       <Card text="Know More" color="bg-blue-600"/>
//       <Card text="Download" color="bg-red-700"/>
//       <Card text="Watch" color="bg-orange-700"/>
//       <Card text="About us" color="bg-green-700"/>
//       <Card text="FeedBack" color="bg-yellow-700"/>
//       <Card text="Improv Us" color="bg-slate-700"/>
//     </>
//   );
// }

// export default App;

// 102 prop drilling usage

import React from "react";
import Card from "./components/Card";


function App() {
  const data =[
    {name:"Vishwajeet", profession:"Coder", image:"https://images.unsplash.com/photo-1722322426803-101270837197?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Vaibhavi", profession:"jr.coder", image:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Himali", profession:"Topper", image:"https://plus.unsplash.com/premium_photo-1723601001034-d334049404a5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Ketaki", profession:"Student", image:"https://plus.unsplash.com/premium_photo-1726812042631-7c4e0b0351aa?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ];

  return (
    <>
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {data.map((item,index)=>(
        <Card values = {item} />
      ))}
    </div>
    </>
  );
}

export default App;
