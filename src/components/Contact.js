import React, { useRef, useState } from 'react'
import { useAuth } from '../Authcontext'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

export default function Contact() {
  const nameRef = useRef()
  const emailRef = useRef()
  const mobileRef = useRef()
  const contactMessageRef = useRef()

  const { currentUser } = useAuth()
  const dbRef = collection(db, 'contact')

  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  function handlesubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')
    addDoc(dbRef, {
      name: nameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      message: contactMessageRef.current.value
    })
      .then(() => {
        setMessage('messege sent succsesfully')
      })
      .catch(() => {
        setError('somthing went wrong')
      })
  }

  return (
    <>
      <div className='dflex'>
        {message && <div className='messagebox'>{message}</div>}
        {error && <div className='errorbox'>{error}</div>}
        <div className='mycard'>
          <form onSubmit={handlesubmit}>
            <div className='dflex'>
              <input ref={nameRef} type={'text'} defaultValue={currentUser.displayName} />
            </div>
            <div className='dflex'>
              <input ref={emailRef} type={'email'} defaultValue={currentUser.email} />
            </div>
            <div className='dflex'>
              <input ref={mobileRef} type={'tel'} placeholder={'mobile no'} />
            </div>
            <div className='dflex'>
              <textarea ref={contactMessageRef} width='400' hight='400' placeholder='type your message here...'></textarea>
            </div>
            <div className='dflex'>
              <input className='mybtn' type={'submit'} value={'contact'} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
