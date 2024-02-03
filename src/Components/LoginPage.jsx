import React, { useState } from 'react'
import "./LoginPage.css"
import axios from 'axios';

function LoginPage() {
    const errored = "error";

    const[userName,setUsername] = useState('');
    const [email, setEmail] = useState('');
    const[firstname,setfirstname] = useState('');
    const[lastname,setlastname]= useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const[success,setSuccess] = useState('');

    const clearFields = ()=>{
        setUsername('')
        setfirstname('')
        setlastname('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    //simple validation
        if (password !== confirmPassword) {
          setError('Passwords not matching');
          console.log("passwords dont match")
          setPassword('')
          setConfirmPassword('')
          return;
        }
    //sending to backend
    try {
        const response = await axios.post('http://localhost:8080/open/signup', {
            "username": userName,
            "email": email,
            "password": password,
            "firstname":firstname,
            "lastname":lastname
          
        });
        console.log(response.data);
        setSuccess(response.data);
        clearFields();
      } catch (error) {
        console.error('Error creating account:', error.response.data);
        setError(error.response.data);
      }

    };
  
  return (
    <div className='container'>
        <div className='login-container'>
            <div className='text'>
                    <h1> Sign Up </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='names'>
                    <input 
                    className="name"
                    placeholder='Firstname'
                    type='text'
                    id='firstname'
                    name={firstname}
                    value={firstname}
                    onChange={(e)=>setfirstname(e.target.value)}/>
                    
                    <input
                    className='name' 
                    placeholder='Lastname'
                    type='text'
                    id='lastname'
                    name={lastname}
                    value={lastname}
                    onChange={(e)=>setlastname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input placeholder='Username' 
                    type="text"    
                    id="name" 
                    name="name" 
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                        <input placeholder='Email' 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input placeholder='Password' 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input placeholder='Confirm password' 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>                       
                </div>

                <button type="submit">Sign up</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <p>Already have an account? <a href="/login">Log in</a></p>            
                </form>
        </div>


    </div>
  )
}

export default LoginPage