import React, { useState } from 'react'
import MJSONDATA from '../policy60.json'
import '../CSS/Policy.css'
// import { db } from '../firebase'
// import { collection } from 'firebase/firestore'
import StripeCheckout from 'react-stripe-checkout';
import { useAuth } from '../Authcontext';


export default function Policy() {
  const [insurer, setinsurer] = useState("")
  const [lifecover, setlifecover] = useState("")
  // const [tillage, settillage] = useState("")
  const [gender, setgender] = useState("")
  const [mpremium, setmpremium] = useState("")
  const [ypremium, setypremium] = useState("")
  const { currentUser } = useAuth()
  // const [policy, setpolicy] = useState([])
  // const policyRef = collection(db, "policies")
  // const [data, setdata] = useState()
  // const [didmount, setdidmount] = useState(false)

  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
  return (
    <>
      {/* <button onClick={() => { getpolicies() }}>getpolicy</button> */}
      <div className='policy d-flex flex-column'>
        <h1 className='text-center w-auto m-3 p-3 shadow m-auto mt-3 mb-3 rounded' style={{ borderBottom: "3px solid blueviolet" }}>List of Policies</h1>
        <table className='table w-auto m-auto rounded shadow-lg'>
          <thead>
            <tr>
              {/* <th scope='col'>#</th>
              <th scope='col'>insurer</th>
              <th scope='col'>life cover</th>
              <th scope='col'>till age</th>
              <th scope='col'>gender</th>
              <th scope='col'>monthly premium</th>
              <th scope='col'>yearly premium</th>
              <th scope='col'>Buy</th>
              <th scope='col'>Buy</th> */}

              <th>#</th>
              <th>insurer</th>
              <th>life cover</th>
              <th>gender</th>
              <th>monthly premium</th>
              <th>yearly premium</th>
              <th>Buy</th>
              <th>Buy</th>
            </tr>
            <tr>
              <th>select</th>
              <th><input type={"text"} placeholder={"insurer"} onChange={(event) => { setinsurer(event.target.value) }} /></th>
              {/* <th><input type={"number"} placeholder={"life cover in lac"} onChange={(event) => { setlifecover(event.target.value) }} /></th> */}
              <th>
                <select onChange={(event) => { setlifecover(event.target.value) }} style={{ width: "200px" }}>
                  <option></option>
                  <option>20 lac</option>
                  <option>25 lac</option>
                  <option>30 lac</option>
                  <option>35 lac</option>
                  <option>40 lac</option>
                  <option>45 lac</option>
                  <option>50 lac</option>
                  <option>55 lac</option>
                  <option>60 lac</option>
                  <option>70 lac</option>
                  <option>80 lac</option>
                  <option>90 lac</option>
                  <option>100 lac</option>
                  <option>150 lac</option>
                </select>
              </th>
              {/* <th><input type={"number"} placeholder={"till age"} onChange={(event) => { settillage(event.target.value) }} /></th> */}
              <th>
                <select onChange={(event) => { setgender(event.target.value) }} style={{ width: "200px" }}>
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </th>
              <th><input type={"number"} placeholder={"monthly premium"} onChange={(event) => { setmpremium(event.target.value) }} /></th>
              <th><input type={"number"} placeholder={"yearly premium"} onChange={(event) => { setypremium(event.target.value) }} /></th>
            </tr>
          </thead>
          <tbody>
            {MJSONDATA
              .sort((a, b) => {
                return b['mouthly premium'] - a['mouthly premium']
              })
              .filter((val) => {
                let val1
                if (insurer === "") {
                  val1 = val
                }
                else if (val.insurer.toLowerCase().includes(insurer.toLowerCase().trim())) {
                  val1 = val
                }
                return val1
              })
              .filter((val) => {
                let val1
                if (lifecover === "") {
                  val1 = val
                }
                else if (val['life cover'].toLowerCase().includes(lifecover.toLowerCase().trim())) {
                  val1 = val
                }
                return val1
              })
              // .filter((val) => {
              //   let val1
              //   if (tillage === "") {
              //     val1 = val
              //   }
              //   else if (val['till age'].toString().includes(tillage.toLowerCase().trim())) {
              //     val1 = val
              //   }
              //   return val1
              // })
              .filter((val) => {
                let val1
                if (gender === "") {
                  val1 = val
                }
                else if (val.Gender.toLowerCase() === (gender.toLowerCase().trim())) {
                  val1 = val
                }
                return val1
              })
              .filter((val) => {
                let val1
                if (mpremium === "") {
                  val1 = val
                }
                else if (val['mouthly premium'].toString() <= Number(mpremium.toLowerCase().trim())) {
                  val1 = val
                }
                return val1
              })
              .filter((val) => {
                let val1
                if (ypremium === "") {
                  val1 = val
                }
                else if (val['yearly premium'].toString() <= Number(ypremium.toLowerCase().trim())) {
                  val1 = val
                }
                return val1
              })
              .map((val, key) => {
                return (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td>{val.insurer.toUpperCase()}</td>
                    <td>{val['life cover']}</td>
                    {/* <td>{val['till age']}</td> */}
                    <td>{val.Gender}</td>
                    <td>{val['mouthly premium'].toFixed(2)}</td>
                    <td>{val['yearly premium'].toFixed(2)}</td>
                    <td><a href='https://buy.stripe.com/test_cN26sfaELgaEbcc9AC' target="_blank" rel="noopener noreferrer">Buy</a></td>
                    <td><StripeCheckout
                      name={val.insurer}
                      currency='INR'
                      amount={val['mouthly premium'] * 100}
                      token={onToken}
                      email={currentUser.email}
                      billingAddress
                      stripeKey="pk_test_51KmArVSIQ4G64EGhp7J8K0m0eGHGukpOACoU0RrNVJLuCjuHGA0wYjYscLsJ2nV45K9x3vkdCMpYGEs3JMQCRRI000M0objpqI"
                    /></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}
