import React, {useState} from 'react'
// import SignUp from './SignUp'.
import {Link} from 'react-router-dom'
import './login.css'

function Login() {
    const[username, setUsername]=useState('')
    const[password,setPassword]=useState('')

    const handleUsernameInput = (event)=>{
        setUsername(event.target.value)
        console.log(username)
    }
    const handlePasswordInput = (event)=>{
        setPassword(event.target.value)
        console.log(password)
    }


       
    return (
        
        <div className='login'>
            <form className='loginform'>
               <label>Username:</label>
               <input className="userinput" type="text" value={username} placeholder='Enter your name' onChange={handleUsernameInput}/><br></br>
               <label>Password:</label>
               <input className="passwordinput" type="password" value={password} placeholder='Enter your password' onChange={handlePasswordInput} /><br></br>
                
                
               <Link to='/home'><button className='logbutton'> Login</button></Link>
            </form>

            <h3 className="here">Sign up <Link to='/signup'> <span>Here</span></Link></h3>
                         
        </div>
    )
}

export default Login
