import React from 'react'
import { Link } from 'react-router-dom'
import '../SLComponents/SL.css'

const Login = () => {
    return (
        <div className='container'>
            <Link to='/' className='heading'>Stonks<i className="fa-solid fa-bolt" /></Link>
            <form action="" className="form">
                <h1>Login to your account</h1>
                <ul className="form-list">
                    <li className="form-item">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' placeholder='First and last name' />
                    </li>
                    <li className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='Enter Password' />
                    </li>
                    <button type='submit' className='btn'>Login</button>
                </ul>
            </form>
            <p className='footer'>New to Stonks?<Link to='/sign-up'>Create new account<i className="fa fa-caret-right" /></Link></p>
        </div>
    )
}

export default Login
