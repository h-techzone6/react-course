import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const MainContent = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#444', padding: '20px' }}>
      <h2>Main Content</h2>
      <p>This is the main content of the application.</p>
    </div>
  )
}

export default MainContent