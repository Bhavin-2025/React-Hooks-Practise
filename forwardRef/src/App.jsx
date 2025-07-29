import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'


function App() {
  const inputRef = useRef(null);

  const updateInput = ()=>{
    inputRef.current.value = 1000;
    inputRef.current.focus();
  }

  return (
    <div>
    <h1>Forward Ref</h1>
    <input type="text" ref={inputRef} />
    <button onClick={updateInput}>Update Input Field</button>
      
    </div>
  )
}

export default App
