import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {

    return (
        <div className="signup">
            |<form>
                <label>Name:</label>
                <input type='text' placeholder='Enter your name'/><br></br>

                <label>Email:</label>
                <input type='email' placeholder='Enter your email'/><br></br>


                <label>Password:</label>
                <input type='text' placeholder='Create a password'/><br></br>

                <button>SignUp</button>
            </form>

           <h3> <Link to ='/login'>back</Link> </h3>
            
        </div>
    )
}

export default SignUp
