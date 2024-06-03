import { useState } from 'react'
import './App.css'

function App() {
  let[count,setCount]=useState(0);

  const IncreaseCount=()=>{
    if(count<10){
    setCount(count++)
    }
  }

  const DecreaseCount=()=>{
    if(count>0){
    setCount(count--)
    }
  }

  return (
    <>
      <h1>Result: {count}</h1>
      <button onClick={IncreaseCount}>Increase Count</button>
      <button onClick={DecreaseCount}>Decrease Count</button>
    </>
  )
}

export default App
