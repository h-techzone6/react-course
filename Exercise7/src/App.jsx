import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [item,setItem] = useState(10)

  const multiCountMemo = useMemo(function multiCount(){
    console.warn('multiCount function called')
    return count*5;
  },[count])

  return (
    <>
      <h1>React UseMemo Hook</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>{multiCountMemo}</h2>

      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
      <button onClick={()=>{setItem(item*10)}}>Update Button</button>
    </>
  )
}

export default App
