import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header>
            <Link to='/'>#VANLIFE</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </header>
    </>
  )
}

export default Navbar