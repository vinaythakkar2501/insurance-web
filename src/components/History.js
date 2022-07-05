import React , {useState} from 'react'
import { db } from '../firebase'
import { collection, addDoc, Timestamp} from 'firebase/firestore'
import { useAuth } from '../Authcontext'

export default function History() {

  const [message,setMessage] = useState('')
  const [error,setError] = useState('')
  const [data_list,setData_list] = useState([])
  const {currentUser} = useAuth()

  // async function uploadFeedback(e){
  //   e.preventDefault()
  //   setError('')
  //   setMessage('')
  //   if(currentUser===null){
  //     setError("you need to sign in")
  //   }
  //   else{
  //     addDoc(dbRef, {
  //       userid: currentUser.uid,
  //       usermail: currentUser.email,
  //       feedback: FeedbackRef.current.value
  //     })
  //     .then(()=>{
  //       setMessage('feedback submiitted succsesfully...')
  //     })
  //     .catch(()=>{
  //       setError('somthing went wrong...')
  //     })
  //   }
  // }
  
  return (
    <>
      <h1 style={{textAlign:'center'}}>History of your predictoins</h1>
      <p>

      </p>
    </>
  )
}
