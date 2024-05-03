import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Sidebar = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <aside style={{ background: theme === 'light' ? '#ccc' : '#555', padding: '10px' }}>
    <h2>Sidebar</h2>
    <p>This is the sidebar with some additional information.</p>
  </aside>
  )
}

export default Sidebar