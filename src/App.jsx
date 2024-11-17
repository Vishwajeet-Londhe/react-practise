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
    {name:"Vishwajeet", profession:"Coder", image:"https://unsplash.com/photos/a-man-wearing-sunglasses-Aph5u9CDdYY"},
    {name:"Vaibhavi", profession:"jr.coder", image:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Himali", profession:"Topper", image:"https://images.unsplash.com/photo-1618780179533-870736eaea58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Ketaki", profession:"Student", image:"https://plus.unsplash.com/premium_photo-1668485967268-f757c5799b1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ];

  return (
    <>
      <Card/>
    </>
  );
}

export default App;
