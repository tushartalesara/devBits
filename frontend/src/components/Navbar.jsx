import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setclick] = useState(false)

    const handleClick = () => { setclick(!click) }
    const closeMobileMenu = () => { setclick(false) }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-brand" to="/">Stonks <i className="fa-solid fa-bolt" /></Link>
                <div className="menu-icon">
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} onClick={handleClick} />
                </div>
                <form className="nav-search">
                    <input type="text" name='search' placeholder='Search products here....' />
                    <button type='submit' className='btn btn-navbar'><i className="fa fa-search" /></button>
                </form>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/sign-up' onClick={closeMobileMenu} className="nav-links">
                            SIGNUP
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' onClick={closeMobileMenu} className="nav-links">
                            LOGIN
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
