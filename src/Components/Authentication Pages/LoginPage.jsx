import React, {useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {


  const[userName,setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const[success,setSuccess] = useState('');
    const [usernameInput,setUsernameInput] = useState(false);
    const[loading,setLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if(password ===''||(!usernameInput && email==='')||(usernameInput && userName==='')) {
            clearFields();
            setError("Enter all fields");
            return;
        }
        setLoading(true)
        try{
          const response = await axios.post('http://localhost:8080/open/signin',{
            "username": userName,
            "password": password,
            "email":email
          })
          console.log(response);
          setSuccess("received token");
          clearFields();
          setLoading(false)
        }catch(error){
          if(error.request.response===""){
            setError("Please try again later")
            return;
        }
          console.log(error.response)
          setError("invalid credentials")
          setLoading(false)
        }

    };

    const clearFields = ()=>{
        setUsername('')
        setEmail('')
        setPassword('')
    }



  return (
    <div className='container'>
        <div className='login-container'>
            <div className='text'>
                    <h1> Welcome back !</h1>
            </div>
            <form onSubmit={handleSubmit}>
                {usernameInput && <div className="form-group">
                    <input placeholder='Username' 
                    className="login-input"
                    type="text"    
                    id="name" 
                    name="name" 
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>}
                {!usernameInput && <div className="form-group">
                        <input placeholder='Email' 
                        className="login-input"
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              }

                <div className="form-group">
                    <input placeholder='Password' 
                    className="login-input"
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <button className='login-submit' type="submit" >{!loading?"Log in":"..."}</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <p className='change-input' onClick={()=>setUsernameInput(!usernameInput)}>Use {usernameInput ? "Email" : "Username"} instead</p>            
                <p>Not having an Account <Link to="/signup">Signup</Link></p>            
                </form>
        </div>


    </div>
  )
}

export default LoginPage