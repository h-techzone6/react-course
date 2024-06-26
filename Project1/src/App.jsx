import { useState } from 'react'
import './App.css'

function App() {
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')

  const calcBmi = (e) => {

    event.preventDefault()
    
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder='Enter weight' value={weight} onChange={(e)=> setWeight(e.target.value)}/>
          </div>

          <div>
            <label>Height (in)</label>
            <input type="text" placeholder='Enter weight' value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <h3>{message}</h3>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
