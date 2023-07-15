
import React,{useState,useEffect}from "react";
import './App.css';
import axios from "axios";

function App() {
  const [info,setInfo]=useState([])
  const fetchInfo=async()=>{
    // fetch("http://localhost:2001/products")
      // // .then(res=>res.json())
      // // .then(data=>{
      // //   setInfo(data)
      // })
      const data=await axios.get("http://localhost:2001/products")
      setInfo(data.data)
  }
  useEffect(()=>{
    fetchInfo()

  },[])
  return (
    <div className="App">
      {
      info.map(val=>{
        return <h2>{val.title}</h2>
      })
    }
      
    </div>
  );
}

export default App;
