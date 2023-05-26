import React,{useState,useCallback}  from "react";
import "./style.css";

export default function App() {
  const[count,setCount]=useState(0)
  const handleClick=useCallback(()=>{
    setCount(count+1)
  },[count])
  return(
    <div>
      <h3>UseCallback Example</h3>
      <p>{count}</p>
      <button onClick={handleClick}>Count</button>
      </div>
  )
  }