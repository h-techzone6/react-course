import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [numCount,setNumCount] = useState(0)
  const [name,setName] = useState('')
  function updateBtn (){
    setCount(count+1)
  }

  function btnInc(){
    setNumCount(numCount+1)
  }

  function btnDsc(){
    setNumCount(numCount-1)
  }
  function btnSetName(){
    setName('TechZone')
  }
  return (
    <>
      <h1>Use State</h1>
      <h2>This button is clicked {count} times</h2>
      <button onClick={updateBtn}>Click Me</button>

      <h2>{numCount}</h2>
      <button onClick={btnInc}>+</button>
      <button onClick={btnDsc}>-</button>

      <h2>My name is {name}</h2>
      <button onClick={btnSetName}>Set Name</button>
    </>
  )
}

export default App
