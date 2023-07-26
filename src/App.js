import React from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import { Route, Routes } from 'react-router-dom'

function App(){

  return (
    <div>
     <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
     </Routes>
     
     
    </div>
  )
}

export default App
