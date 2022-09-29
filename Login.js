import React from 'react'
import './Login.css'

import SignUp from './SignUp'

export default function Login() {
  const [signIn ,setSignIn] = React.useState(false);
  return (
    <div className="loginScreen">
        <div className="login--background">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="login--logo" />
            <button className="login--button" onClick={()=>setSignIn(true)}>Sign In</button>
            <div className="login--gradiant"/>
        </div>

        {signIn ? <SignUp/> : (<div className="login--body">
        <>
            <h1 className="bodyTitle">Unlimited films, TV programs and more.</h1>
            <h2 className="bodyText">Watch anywhere. Cancel anytime.</h2>
            <h3 className="bodyText2">Ready to watch? Enter your email  to create or restart your membership</h3>
            <div className="login--input">
              <form >
                <input type="email" placeholder='Email Address' />
                <button className="login--getStarted" onClick={()=>setSignIn(true)}>
                  Get Started 
                </button>
              </form>
            </div>
            </>
        </div>)}
        
    </div>


  )
}
