import React from 'react'
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import policydata from './policy60.json'
import StripeCheckout from 'react-stripe-checkout';

export default function uploadpolicy() {
    const policyRef = collection(db, "policies")

    const addpolicy = async () => {
        policydata.map((data) => {
            addDoc(policyRef, data)
                .then((id) => { console.log("uploaded", id++) })
                .catch((err) => { console.log(err) })
            return null
        })
    }
    const addproduct = async () => {
        console.log("adding products")

    }

    const onToken = (token) => {

    }

    return (
        <>
            {/* <button onClick={() => { addpolicy() }}>upload</button> */}
            <button onClick={() => { addproduct() }}>add product</button>
            <StripeCheckout
                name='TATA'
                currency='INR'
                amount={5000}
                token={onToken}
                email="info@vidhub.co"
                stripeKey="pk_test_51KmArVSIQ4G64EGhp7J8K0m0eGHGukpOACoU0RrNVJLuCjuHGA0wYjYscLsJ2nV45K9x3vkdCMpYGEs3JMQCRRI000M0objpqI"
            />
        </>
    )
}
