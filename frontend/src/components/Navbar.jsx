import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click);
    };
    const closeMobileMenu = () => {
        setclick(false);
    };
    const islogedin = () => {
        if(localStorage.getItem("token")===null){return true}
        else{return false}
    };
    const logout=()=>{
        closeMobileMenu()
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-brand" to="/">
                    Stonks <i className="fa-solid fa-bolt" />
                </Link>
                {islogedin() ? (
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/sign-up"
                                onClick={closeMobileMenu}
                                className="nav-links"
                            >
                                SIGNUP
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" onClick={closeMobileMenu} className="nav-links">
                                LOGIN
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" onClick={logout} className="nav-links">
                                LOGOUT
                            </Link>
                        </li>
                    </ul>
                )}
                <div className="menu-icon">
                    <i
                        className={click ? "fa fa-times" : "fa fa-bars"}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
