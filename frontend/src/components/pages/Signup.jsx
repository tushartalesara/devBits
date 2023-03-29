import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../SLComponents/SL.css'
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phoneNo: "",
            password: "",
            confirmpassword:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const registered = {
            email: this.state.email,
            phoneNo: this.state.phoneNo,
            password: this.state.password,
        }

        axios.post('http://localhost:5000/api/signup', registered)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            email: "",
            phoneNo: "",
            password: "",
            confirmpassword:""
        })
    }
    render() {
        return (
            <div className='container'>
                <Link to='/' className='heading'>Stonks<i className="fa-solid fa-bolt" /></Link>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1>Create Account</h1>
                    <ul className="form-list">
                        <li className="form-item">
                            <label htmlFor="email">Email *</label>
                            <input type="text" id='email' onChange={(e) => this.setState({ email: e.target.value })} placeholder='Email' required value={this.state.email}/>
                        </li>
                        <li className="form-item">
                            <label htmlFor="phoneno">Phone Number</label>
                            <input type='text' id='phoneno' onChange={(e) => this.setState({ phoneNo: e.target.value })} placeholder='Phone Number' value={this.state.phoneNo}/>
                        </li>
                        <li className="form-item">
                            <label htmlFor="password">Password *</label>
                            <input type="password" id='password' onChange={(e) => this.setState({ password: e.target.value })} placeholder='Enter Password' required value={this.state.password}/>
                        </li>
                        <li className="form-item">
                            <label htmlFor="confirm-password">Confirm Password *</label>
                            <input type="password" id='confirm-password' placeholder='Confirm Password' onChange={(e)=> this.setState({confirmpassword:e.target.value})} required value={this.state.confirmpassword} />
                        </li>
                        <button type='submit' className='btn'>Register</button>
                    </ul>
                </form>
                <p className='footer'>Already have an account? <Link to='/login'>Login<i className="fa fa-caret-right" /></Link></p>
            </div>
        )
    }
}