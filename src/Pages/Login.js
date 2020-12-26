import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="login">
           <div className="login__image">
               <img alt="img" src="https://i.pinimg.com/originals/18/e1/80/18e180218bdac1685b79197c9023259b.png" width="250" />
           </div>
           <button className="btn">
              <i className="fab fa-google" style={{marginRight: "10px"}}></i>
              Sign With Google
            </button>
        </div>
    )
}

export default Login
