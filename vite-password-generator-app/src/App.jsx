import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'
import { useEffect, useRef } from 'react'

function App() {
  const [numAllowed, setNumAllowed] = useState(false)
  const[charAllowed, setCharAllowed]=useState(false)
  const[length, setLength]=useState(8)
  const[password, setPassword]=useState("")

  const passRef=useRef(null)

  const copyToClip=useCallback(()=>{
    passRef.current?.select();
    //passRef.current?.setSelectionRange(0,25);
    window.navigator.clipboard.writeText(password);
  }, [password])

  const PasswordGenerator=useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""

    if(numAllowed) str+="1234567890"
    if(charAllowed) str+="@!$#&^~`"

    for(let i=0; i<length; i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }

    setPassword(pass)

  },[numAllowed, charAllowed,length])

  useEffect(()=>{
    PasswordGenerator()
  },[numAllowed,charAllowed,length])

  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <div>
          <input type="text" 
          value={password}
          placeholder='password'
          ref={passRef}
          readOnly
          />
          <button
          onClick={copyToClip}
          >Copy</button>
        </div>
        <div>
          <input 
          type="range"
          value={length}
          min={5}
          max={25}
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
          <input type="checkbox"
          defaultChecked={numAllowed}
          onChange={()=>setNumAllowed((prev)=>!prev)}
          />
          <label>Numbers</label>
          <input type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>setCharAllowed((prev)=>!prev)}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
