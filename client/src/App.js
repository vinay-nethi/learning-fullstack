
import React,{useState,useEffect}from "react";
import './App.css';

function App() {
  const [info,setInfo]=useState([])
  const fetchInfo=()=>{
    fetch("http://localhost:2000/bikes")
      .then(res=>res.json())
      .then(data=>{
        setInfo(data)
      })
  }
  useEffect(()=>{
    fetchInfo()

  },[])
  return (
    <div className="App">
      {
      info.map(val=>{
        return <h2>{val.bike}</h2>
      })
    }
      
    </div>
  );
}

export default App;
