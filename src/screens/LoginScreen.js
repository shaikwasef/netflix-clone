import React from 'react'
import "./LoginScreen.css"
import { useState } from "react"
import SignupScreen from "./SignupScreen"

function LoginScreen() {
    // useState to set state of user
    const [signIn , setSignIn] = useState(false);
    return (

        <div className = "loginScreen">
            <div>
                <img 
                className = "loginScreen_logo"
                src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt =""
                />
                <button 
                onClick = {() => setSignIn(true)}
                className = "loginScreen_button">Sign In</button>
                <div className = "loginScreen_gradient" />
                </div>

                <div className = "loginScreen_body">
                    {signIn ? (
                        <SignupScreen />
                    ) : (
                        <>
                        <h1>Unlimited films , TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3> Ready to watch ? Enter your email to create or restart your membership.</h3>

                        <div className = "loginScreen_input">
                            <form>
                                <input type = "email"
                                placeholder = "Email Address"/>
                                <button className = "loginScreen_getStarted">GET STARTED</button>
                            </form>
                        </div>
                </>
                    )}

                </div>
            </div>
    )
}

export default LoginScreen
