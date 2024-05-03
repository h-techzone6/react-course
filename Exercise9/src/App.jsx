import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App