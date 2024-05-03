import { useState } from 'react'
import './App.css'
import datas from './datas.json'
import Fetch from './Fetch'


function App() {
  const [nData, setnData] = useState(datas)
  const [btnData,setBtnData] = useState('')
  console.log(datas);
  
  const btn1 = () => {
    setBtnData('My')
  }
  const btn2 = () => {
    setBtnData('Name')
  }
  return (
    <>
      {
        nData.map(items=>{
          return <li key={items.id}>{items.name}
         
          </li>
        })
      }
      <button onClick={()=> setnData([])}>Clear</button>
      <br />

      <button onClick={btn1}>My</button>
      <h1>{btnData}</h1>
      <button onClick={btn2}>Name</button>
      <br />
      {/* useEffect Exapmle  */}
      <Fetch></Fetch>
      
    </>
  )
    }

export default App
