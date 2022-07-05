import React, { useRef, useState } from "react"
import { useAuth } from "../Authcontext"
import { Link } from "react-router-dom"
import '../CSS/login.css'

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetpassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetpassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="login">
        <div className="formbox">
          <h2>Password Reset</h2>
          {error && <div className='errorbox'>{error}</div>}
          {message && <div className="errorbox">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <input type="email" ref={emailRef} placeholder='E-mail' required />
            </div>
            <div className="inputbox">
              <input disabled={loading} type="submit" />
            </div>
          </form>
          <div className='logintext'>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}