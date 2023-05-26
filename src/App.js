import React,{useMemo,useState} from "react";
import "./style.css";

export default function App() {
  const[count,setCount]=useState(0)
  const[item,setItem]=useState(10)
  console.log('clicked')
  console.log('item clicked')
  const multiCountMemo=useMemo(function multiCount(){
    console.log('multiCount')
    return count*5
  },[count])
  return (
    <div>
      <h3>useMemo are used in hook in React</h3>
      <h4>{count}</h4>
      <h4>{item}</h4>
      <h4>{multiCountMemo}</h4>
      <button onClick={()=>setCount(count+1)}>count</button>
      <button onClick={()=>setItem(item*10)}>Item</button>
      
    </div>
  );
}
