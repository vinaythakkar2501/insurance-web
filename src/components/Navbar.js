import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Authcontext';
import '../CSS/navbar.css';
import logo from '../img/logo.png'

export default function Navbar() {
  const [error, setError] = useState("")
  const { currentUser, logout,userPhoto } = useAuth();
  const [loading, setLoding] = useState(false)
  const history = useHistory()
  const [isAuth, setIsAuth] = useState(false)
  const [uphoto,setUphoto] = useState()

  useEffect(() => {
    if (currentUser !== null) {
      setIsAuth(true)
      setUphoto(currentUser.photoURL)
    }
    else {
      setIsAuth(false)
    }
    return
  }, [currentUser])

  async function handleLogout() {
    setError("")
    try {
      await logout()
      history.push('/login')
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <>
      <div className='mnavbar'>
        <img className='logo' src={logo} />
        <ul className='nav2'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/info'>Insurance</Link> </li>
          <li><Link to='/policies'>policy</Link></li>
          <li><Link to='/feedback'>Feedback</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <div className='nav3'>
          <div className='predict'>
            <Link to='/predictions'>
              Predict
            </Link>
          </div>
          <div>
            {
              isAuth ?
                <div className='mdropdown'>
                  {uphoto?
                  <img
                  alt='profile'
                  src={uphoto}
                  height={40}
                  />:
                  <img 
                  alt='profile'
                  src={userPhoto}
                  height={40}
                  />
                  }
                  <div className='mdropdown-content'>
                    <div>
                      <Link to={'/user-profile'}>My Profile</Link>
                    </div>
                    <div>
                      <Link to={'/edit-profile'}>Edit Profile</Link>
                    </div>
                    <div>
                      <button onClick={handleLogout}>Log out</button>
                    </div>
                  </div>
                </div>
                :
                <div className='predict'>
                <Link to={'login'} >Log In</Link>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}
