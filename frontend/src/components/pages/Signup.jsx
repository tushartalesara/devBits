import React, { Component,useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../SLComponents/SL.css'
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            PhoneNo: "",
            Email: "",
            Password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const registered = {
            Username: this.state.Username,
            PhoneNo: this.state.PhoneNo,
            Email: this.state.Email,
            Password: this.state.Password,
        }

        axios.post('http://localhost:5000/api/signup', registered)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            Username: "",
            PhoneNo: "",
            Email: "",
            Password: ""
        })
    }
    render() {
        return (
            <div className='container'>
                <Link to='/' className='heading'>Stonks<i className="fa-solid fa-bolt" /></Link>
                <form action="POST" className="form" onSubmit={this.handleSubmit}>
                    <h1>Create Account</h1>
                    <ul className="form-list">
                        <li className="form-item">
                            <label htmlFor="username">Username *</label>
                            <input type="text" id='username' onChange={(e) => this.setState({ Username: e.target.value })} placeholder='First and last name' required value={this.state.Username}/>
                        </li>
                        <li className="form-item">
                            <label htmlFor="phoneno">Phone Number</label>
                            <input type='text' id='phoneno' onChange={(e) => this.setState({ PhoneNo: e.target.value })} placeholder='Phone Number' value={this.state.PhoneNo}/>
                        </li>
                        <li className="form-item">
                            <label htmlFor="email">Email *</label>
                            <input type="text" id='email' onChange={(e) => this.setState({ Email: e.target.value })} placeholder='Email' required value={this.state.Email}/>
                        </li>
                        <li className="form-item">
                            <label htmlFor="password">Password *</label>
                            <input type="password" id='password' onChange={(e) => this.setState({ Password: e.target.value })} placeholder='Enter Password' required value={this.state.Password}/>
                        </li>
                        <li className="form-item">
                            <label htmlFor="confirm-password">Confirm Password *</label>
                            <input type="password" id='confirm-password' placeholder='Confirm Password' required />
                        </li>
                        <button type='submit' className='btn'>Register</button>
                    </ul>
                </form>
                <p className='footer'>Already have an account? <Link to='/login'>Login<i className="fa fa-caret-right" /></Link></p>
            </div>
        )
    }
}