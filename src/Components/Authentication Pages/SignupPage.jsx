import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import "./SignupPage.css"
function SignupPage() {
    const navigate = useNavigate();

    const[userName,setUsername] = useState('');
    const [email, setEmail] = useState('');
    const[firstname,setfirstname] = useState('');
    const[lastname,setlastname]= useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const[success,setSuccess] = useState('');
    const[loading,setLoading] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    //simple validation
        if(userName===''||firstname===''||lastname===''||password==='' || email ==='') {
            setError("Please enter all fields");
            return;
        }
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
        console.log(response);        
        console.log(response.data);
        setSuccess(response.data);
        clearFields();

        setTimeout(()=>{
            navigate("/login")
        },1500)
        
    } catch (error) {
        //error when cant reach server
        if(error.request.response===""){
            setError("Please try again later")
            return;
        }
        const errorResponse = error.response
        console.error('Error creating account:', errorResponse.data);
        
        setError(errorResponse.data);
      }

    };

    
    const clearFields = ()=>{
        setUsername('')
        setfirstname('')
        setlastname('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setError('')
    }
  
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
                    className='name' 
                    type="text"    
                    id="name" 
                    name="name" 
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                        <input placeholder='Email' 
                        className='name'
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input placeholder='Password' 
                    className='name'
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input placeholder='Confirm password'
                    className='name' 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>                       
                </div>

                <button type="submit">{!loading?"Sign Up":"..."}</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <p>Already have an account? <Link to="/login">Log in</Link></p>            
                </form>
        </div>


    </div>
  )
}

export default SignupPage