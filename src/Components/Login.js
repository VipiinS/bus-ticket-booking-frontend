import React, { useState } from 'react'
import './login.css'
import busImage from './login-bus.png';

function Login() {
    // const [error,setError] = useState('');



  return (
    <div>
        <div className='flex-container'>
            <div className='login-container'>
                <div className='text'>
                    <h1> Create your account </h1>
                    <h3>To start your adventure</h3>
                </div>
                <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>

            </div>
            <div className='image-container'>
                <img src={busImage} alt='bus'/>
            </div>
        </div>
    </div>
  )
}

export default Login