import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Authcontext';
import { gprovider } from '../firebase';
import '../CSS/login.css'
import googlelogo from '../img/g.ico'
// import facebooklogo from '../img/f.ico'
import twitterlogo from '../img/t.ico'

export default function Login() {

  const EmailRef = useRef()
  const PasswordRef = useRef()
  const { login } = useAuth()
  const { loginwithgoogle } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoding] = useState(false)
  const history = useHistory()

  const glogin = () => {
    loginwithgoogle(gprovider).then((result) => {
      history.push('/')
    }).catch((error) => {
      setError("Failed to log in")
    });
  };
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoding(true)
      await login(EmailRef.current.value, PasswordRef.current.value)
      history.push('/')
    } catch {
      setError("Failed to Log In")
    }
    setLoding(false)
  }
  return (
    <>
      <div className='login'>
        <div className='formbox'>
          <h2>Log In</h2>
          {error && <div className='errorbox'>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className='inputbox'>
              <input type="email" ref={EmailRef} placeholder='E-mail' />
            </div>
            <div className='inputbox'>
              <input type="password" ref={PasswordRef} placeholder='Password' />
            </div>
            <div className='inputbox'>
              <input type="submit" value='Log In' />
            </div>
          </form>
          <div className='logintext'>
            <Link to='/signup'>Create Account</Link>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
          <ul className='sci'>
            <li onClick={glogin} className='Google'><img alt='google' src={googlelogo} /></li>
            <li className='Facebook'></li>
            <li className='Twitter'><img alt='twitter' src={twitterlogo} /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
