import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { AuthProvider } from "./AuthContext";
import Header from "./Header";
import Dashboard from "./Dashboard";

import { ThemeProvider } from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";
import ThemedBox from "./ThemedBox";

import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import Greeting from "./Greeting";

import { CartProvider } from "./CartContext";
import CartDisplay from "./CartDisplay";
import AddItemButton from "./AddItemButton";
import ClearCartButton from "./ClearCartButton";

import { RoleProvider } from "./RoleContext";
import RoleSwitcher from "./RoleSwitcher";
import Dashboard_role from './Dashboard_role';

function App() {


  return (
    <>
    {/* <AuthProvider>
      <div>
        <Header />
        <Dashboard />
      </div>
    </AuthProvider> */}

     {/* <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>🌗 Theme Switcher using useContext</h1>
        <ThemeToggler />
        <ThemedBox />
      </div>
    </ThemeProvider> */}
{/* 
    <LanguageProvider>
      <div style={{ padding: "20px" }}>
        <h1>🌐 Language Selector App</h1>
        <LanguageSwitcher />
        <Greeting />
      </div>
    </LanguageProvider> */}

    {/* <CartProvider>
      <div style={{ padding: "20px" }}>
        <h1>🛒 Shopping Cart (useContext)</h1>
        <CartDisplay />
        <AddItemButton />
        <ClearCartButton />
      </div>
    </CartProvider> */}

    <RoleProvider>
      <div style={{ padding: "20px" }}>
        <h1>🏷️ Role Based UI with useContext</h1>
        <RoleSwitcher />
        <Dashboard />
      </div>
    </RoleProvider>
    
    
    </>
  )
}

export default App
