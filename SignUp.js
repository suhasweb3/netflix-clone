import React,{useRef} from 'react'
import { auth } from './firebase';
// import {auth} from  '../firebase'
import './Signup.css'


export default function SignUp() {
  const emailRef = useRef(null);
  const PasswordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value, PasswordRef.current.value).then((authUser) => {
      console.log(authUser);
    }).catch(error => {alert(error.message);})}
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailRef.current.value, PasswordRef.current.value).then((authUser) => {
      console.log(authUser);
    }).catch(error => {alert(error.message);})}
  
  return (
    <>
      <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email Address' />
        <input ref={PasswordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
        <span  className='newtwonetflix'>New to Netflix?</span>
        <span  className='signupnow' onClick={register}> Sign up now</span>
        </h4>
      </form>
      </div>
    </>
  )
  }

