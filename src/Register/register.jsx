import React from 'react';
import './register.css';
import { FaUser, FaLock , FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Register</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' required />
                <FaLock className='icon' />
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Phone Number' required />
                <FaMobileAlt className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Email' required />
                <MdEmail className='icon' />
            </div>

            <div className='remember-forgot'>
                <label><input type="checkbox"/>Remember me</label>
            </div>

            <button type='submit'>Register</button>

            <div className='login-link'>
                <p>Already have an account?<Link to='/Login/login'>Login</Link></p>
            </div>
        </form>
    </div>
  );
}

export default Register;