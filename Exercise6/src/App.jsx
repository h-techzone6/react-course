import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormdata] = useState({
    name : '',
    email: '',
    password: ''
  })

  const handleInput = (e) =>{
    const {name,value} = e.target;

    setFormdata({
      ...formData,[name]:value
    })
  }

  const submit = (e) =>{
    e.preventDefault()
  }

  return (
    <>
      <form action={submit}>
      <label>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleInput} />
      <br />

      <label>Email</label>
      <input type="text" name="email" value={formData.email} onChange={handleInput} />
      <br />

      <label>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleInput} />
      <br />
      </form>
      <button type='submit'>Submit</button>
      <h2>Name : {formData.name}</h2>
      <h2>Email: {formData.email}</h2>
      <h2>Password : {formData.password}</h2>
      
    </>
  )
}

export default App
