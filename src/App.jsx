import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card text="Know More" color="bg-blue-600"/>
      <Card text="Download" color="bg-red-700"/>
      <Card text="Watch" color="bg-orange-700"/>
      <Card text="About us" color="bg-green-700"/>
      <Card text="FeedBack" color="bg-yellow-700"/>
    </>
  );
}

export default App;