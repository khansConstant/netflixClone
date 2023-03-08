import React, { useState } from 'react'
import "./register.scss"
import logo from "../../assets/images/netflixLogo.png"
import { useRef } from 'react'

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }


    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src={logo} alt="" />
                    <button className="loginButton">
                        Sign in
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, doloribus?</p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder='Email address' ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>
                                Get started
                            </button>
                        </div>
                    ) : (
                        <form className="input">
                            <input type="password" placeholder='enter your password' ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish}>
                                Start
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default Register