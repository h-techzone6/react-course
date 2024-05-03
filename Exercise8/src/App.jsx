import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'
import About from './components/About';
import Contact from './components/Contact'
import Home from './components/Home'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
