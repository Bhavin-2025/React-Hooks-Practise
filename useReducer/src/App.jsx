import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Example1_Counter'
import ContactForm from './Example2_Form'
import TodoApp from './Example3_Todo'
import ShoppingCart from './example4_ShoppingCart'
import QuizApp from './Example4_Quiz'
import Theme from './Example5_Theme'
import ModalExample from './Example7_ModalVisiblity'
import LoginForm from './Example8_FormValidation'
import MultiStepForm from './Example9_multistep'
import InventoryManagement from './InventoryManagement'

function App() {

  return (
    <>
     {/* <Counter/> */}
     {/* <ContactForm/> */}
     {/* <TodoApp/> */}
     {/* <ShoppingCart/> */}
     {/* <QuizApp/> */}
     {/* <Theme/> */}
     {/* <ModalExample/> */}
     {/* <LoginForm/> */}
     {/* <MultiStepForm/> */}
     <InventoryManagement/>
     
    </>
  )
}

export default App
