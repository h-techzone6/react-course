import React from 'react'
import {NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <>
        <h1>Home Page</h1>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
            </ul>
          </nav>
        </header>
    </>
  )
}

export default Home