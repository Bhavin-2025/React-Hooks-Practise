import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CounterApp from './Example1_Counter'
import TodoApp from './Example2_Todo'
import CityFilterApp from './Example3_CityFilter'
import FeedbackForm from './Example4_FormSubmission'

function App() {
  

  return (
    <>
     {/* <CounterApp/> */}
     {/* <TodoApp/> */}
     {/* <CityFilterApp/> */}
     <FeedbackForm/>
    </>
  )
}

export default App
