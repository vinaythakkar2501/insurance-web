import React from 'react'
import { useAuth } from '../Authcontext'

export default function () {
  const {currentUser} = useAuth()
  
  return (
    <>
      {
        currentUser &&
        <>
        <img src={currentUser.photoURL} width='100' height='100' alt='avatar' />
        <p>{currentUser.uid}</p>
        <p>{currentUser.displayName}</p>
        <p>{currentUser.email}</p>
        </>
      }
    </>
  )
}
