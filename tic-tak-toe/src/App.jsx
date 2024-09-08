import { useState } from 'react'
import Nav from './components/nav.jsx'
import Home from './pages/home.jsx'
import "./index.css"

function App() {


  return (
    <div id = "main-body">
      <Nav></Nav>
      <Home></Home>
    </div>
  )
}

export default App
