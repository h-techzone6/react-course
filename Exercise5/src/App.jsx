import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleName = (e) =>{
    console.log(e.target.value)
    setName(e.target.value)
  }
  
  const handleEmail = (e) =>{
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handlePassword = (e) =>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  
  return (
    <>
      <label>Name</label>
      <input type="text" value={name} onChange={handleName}/> {name}
      <br />

      <label>Email</label>
      <input type="text" value={email} onChange={handleEmail}/> {email}
      <br />

      <label>Passowrd</label>
      <input type="password" value={password} onChange={handlePassword}/> {password}
      <br />
    </>
  )
}

export default App
