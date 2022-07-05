import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../Authcontext'
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import '../CSS/user-profile.css'

export default function UserProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { currentUser, userPhoto } = useAuth()
  const history = useHistory()
  const userInfoCollectionRef = collection(db, "users-info")
  const [isAuth, setIsAuth] = useState(false)
  const [uphoto, setUphoto] = useState()
  const [uname, setUname] = useState()
  const [uemail, setUemail] = useState()
  const [utel, setUtel] = useState("9924888428")
  const [ustate, setUstate] = useState("Gujarat")
  const [ucity, setUcity] = useState("Ahmedabad")
  const [ugender, setUgender] = useState("male")
  const [udob,setUdob] = useState("12/01/2002")
  const [cuid, setCuid] = useState()

  useEffect(() => {
    if (currentUser !== null) {
      setIsAuth(true)
      setCuid(currentUser.uid)
      setUname(currentUser.displayName)
      setUemail(currentUser.email)
      setUphoto(currentUser.photoURL)
    }
    else {
      setIsAuth(false)
    }
    return
  }, [currentUser])

  return (
    <>
      <div className='user-profile'>
        <div className='section'>
          <div className='section1'>
            {uphoto ?
              <img src={uphoto} alt='profile' style={{ borderRadius: "50%" }} />
              : <img src={userPhoto} alt='profile' style={{ borderRadius: "50%" }} />}
            <div className='user-name'>@{uname}</div>
          </div>
          <div className='section2'>
            <div className='user-info'>
              <label>Disply name</label>
              <p>{uname}</p>
            </div>
            <div className='user-info'>
              <label>email</label>
              <p>{uemail}</p>
            </div>
            <div className='user-info'>
              <label>Contact number</label>
              <p>{utel}</p>
            </div>
            <div className='user-info'>
              <label>date of birth</label>
              <p>{udob}</p>
            </div>
            <div className='user-info'>
              <label>Gender</label>
              <p>{ugender}</p>
            </div>
            <div className='user-info'>
              <label>State</label>
              <p>{ustate}</p>
            </div>
            <div className='user-info'>
              <label>City</label>
              <p>{ucity}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
