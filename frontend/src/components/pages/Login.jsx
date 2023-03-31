import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../SLComponents/SL.css'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        const logininfo={
            email : email,
            password: password
        }
        axios.post('http://localhost:5000/api/login',logininfo)
            .then(res=>{
                localStorage.setItem("token", res.data);
                window.location.replace('/');
            })
            .catch(err=>console.log(err))
        
       
    }
    return (
        <div className='container'>
            <Link to='/' className='heading'>Stonks<i className="fa-solid fa-bolt" /></Link>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login to your account</h1>
                <ul className="form-list">
                    <li className="form-item">
                        <label htmlFor="uemail">Email</label>
                        <input type="text" id='username' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required value={email}/>
                    </li>
                    <li className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' required value={password} />
                    </li>
                    <button type='submit' className='btn'>Login</button>
                </ul>
            </form>
            <p className='footer'>New to Stonks?<Link to='/sign-up'>Create new account<i className="fa fa-caret-right" /></Link></p>
        </div>
    )
}

export default Login
