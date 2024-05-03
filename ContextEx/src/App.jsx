import ThemeProvider from './context/ThemeProvider'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {

  return (
    <ThemeProvider>
     
    <div>
      <Header/>
      <div style={{ display: 'flex' }}>
          <MainContent />
          <Sidebar />
        </div>
      </div>      
      
    </ThemeProvider>
  )
}

export default App
