import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleComponent from "./ToggleComponent";
import useCounter from './useCounter'

function App() {

  // const { count, increment, reset } = useCounter(5); 

  return (
  
      <div>
      {/* <h1>Count: {count}</h1>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={reset}>🔄 Reset</button> */}

        <div className="App">
      <h1>Custom Hook Demo</h1>
      <ToggleComponent /> {/* 👈 Use the component here */}
    </div>
    </div>
    
  )
}

export default App
