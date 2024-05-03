import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Booklist></Booklist>
    </>
  )
}

export default App
