import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Authcontext';
import '../CSS/edit-profile.css'
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function EditProfile() {

  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { currentUser, userPhoto } = useAuth()
  // const history = useHistory()
  const userInfoCollectionRef = collection(db, "users-info")
  const [isAuth, setIsAuth] = useState(false)

  const nameRef = useRef()
  const emailRef = useRef()
  const telRef = useRef()
  const genderRef = useRef()
  const dobRef = useRef()
  const stateRef = useRef()
  const cityRef = useRef()

  const [uphoto, setUphoto] = useState()
  const [uname, setUname] = useState()
  const [uemail, setUemail] = useState()
  const [utel, setUtel] = useState()
  const [ustate, setUstate] = useState()
  const [ucity, setUcity] = useState()
  const [ugender, setUgender] = useState()
  const [udob, setUdob] = useState()
  // const [cuid, setCuid] = useState()

  useEffect(() => {
    if (currentUser !== null) {
      setIsAuth(true)
      setUphoto(currentUser.photoURL)
      setUname(currentUser.displayName)
      setUemail(currentUser.email)
    }
    else {
      setIsAuth(false)
    }
    return
  }, [currentUser])


  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    console.log("1")

    await addDoc(userInfoCollectionRef, {
      uid: currentUser.uid,
      name: nameRef.current.value,
      email: emailRef.current.value,
      contact: telRef.current.value,
      gender: genderRef.current.value,
      dateofbirth: dobRef.current.value,
      state: stateRef.current.value,
      city: cityRef.current.value
    })
      .then(() => {
        setError('registered to database')
        console.log("updated")
      })
      .catch(() => {
        setError('error')
        console.log("error")
      })
  }

  // function handleSubmit(e) {
  //   e.preventDefault()

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match")
  //   }

  //   const promises = []
  //   setLoading(true)
  //   setError("")

  //   if (emailRef.current.value !== currentUser.email) {
  //     promises.push(updateemail(emailRef.current.value))
  //   }
  //   if (passwordRef.current.value) {
  //     promises.push(upadatepassword(passwordRef.current.value))
  //   }

  //   Promise.all(promises)
  //     .then(() => {
  //       history.push('/')
  //     })
  //     .catch(() => {
  //       setError("Failed to update account")
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }

  return (
    <>
      <div className='edit-profile'>
        <div className='mcontainer'>
          <div className='edit-profile-form'>
            <form onSubmit={handleSubmit}>
              <div className='user-photo'>
                {uphoto ?
                  <img src={uphoto} alt='profile' />
                  : <img src={userPhoto} alt='profile' />}
                <button>change photo</button>
              </div>
              <div className='user-info'>
                <label>name</label>
                <input
                  type={"text"}
                  ref={nameRef}
                  defaultValue={uname}
                />
              </div>
              <div className='user-info'>
                <label>email</label>
                <input
                  type={"email"}
                  ref={emailRef}
                  defaultValue={uemail}
                />
              </div>
              <div className='user-info'>
                <label>contact number</label>
                <input
                  type={"tel"}
                  ref={telRef}
                  defaultValue={utel}
                />
              </div>
              <div className='user-info'>
                <label>gender</label>
                <select ref={genderRef}>
                  defaultValue={ugender}
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className='user-info'>
                <label>date of birth</label>
                <input
                  type={"date"}
                  ref={dobRef}
                  defaultValue={udob}
                />
              </div>
              <div className='user-info'>
                <label>state</label>
                <input
                  type={"text"}
                  ref={stateRef}
                  defaultValue={ustate}
                />
              </div>
              <div className='user-info'>
                <label>city</label>
                <input
                  type={"text"}
                  ref={cityRef}
                  defaultValue={ucity}
                />
              </div>
              <div className='user-info'>
                <input
                  type={"submit"}
                  value={"update to database"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}