import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <header style={{background:theme === 'light' ? '#eee':'#333',padding:'10px'}}>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    </div>
  )
}

export default Header