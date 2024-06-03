import { useState } from 'react'
import './App.css'

function App() {
  let[Color, setColor]=useState('olive')

  return (
    <>
      <div style={{backgroundColor: Color}} className='main-container'>
        <h1 className='main-heading'>Background Changer</h1>
        <div className='btn-container'>
          <button onClick={()=>setColor("red")}>Red</button>
          <button onClick={()=>setColor("blue")}>Blue</button>
          <button onClick={()=>setColor("green")}>Green</button>
          <button onClick={()=>setColor("black")}>Black</button>
          <button onClick={()=>setColor("pink")}>Pink</button>
          <button onClick={()=>setColor("grey")}>Grey</button>
          <button onClick={()=>setColor("orange")}>orange</button>
        </div>
      </div>
    </>
  )
}

export default App
