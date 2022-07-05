import React, { useState, useEffect } from 'react';
import { useAuth } from '../Authcontext';
import { collection, getDocs, doc, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import lifeimg from '../img/life_insurance.jpg'
import healthimg from '../img/health_insurance.jpg'
import { AiOutlineDelete } from 'react-icons/ai'


export default function Predict() {
  const lifedbRef = collection(db, 'life-predictions')
  const medicaldbRef = collection(db, 'medical-predictions')
  // const [message, setMessage] = useState('')
  // const [error, setError] = useState('')
  const [lifepredictions, setLifepredictions] = useState([])
  const [medicalpredictions, setMedicalpredictions] = useState([])
  const history = useHistory()
  const { currentUser } = useAuth()
  const ql = query(lifedbRef, where("userid", "==", currentUser.uid))
  const qm = query(medicaldbRef, where("userid", "==", currentUser.uid))


  async function refreshpredictions() {
    const getLifePredictions = async () => {
      const data = await getDocs(ql)
      setLifepredictions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    const getMedicalPredictions = async () => {
      const data = await getDocs(qm)
      setMedicalpredictions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getLifePredictions()
    getMedicalPredictions()
  }

  const deleteLPrediction = async (id) => {
    await deleteDoc(doc(db, 'life-predictions', id))
      .then(() => {
        console.log("deleted")
        refreshpredictions()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const deleteMPrediction = async (id) => {
    await deleteDoc(doc(db, 'medical-predictions', id))
      .then(() => {
        console.log("deleted")
        refreshpredictions()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    refreshpredictions()
  }, [])

  function linktolprediction() {
    history.push('/predictions/life-insurance-predict')
  }
  function linktomprediction() {
    history.push('/predictions/health-insurance-predict')
  }
  function linktolinfo() {
    history.push('/info/life-insurance')
  }
  function linktominfo() {
    history.push('/info/health-insurance')
  }
  return (
    <>
      <div className='dflexr'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={lifeimg}
            alt="Life insurance"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Life insurance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An insurance premium is the amount of money an individual or business must pay for an insurance policy. Insurance premiums are paid for policies that cover healthcare, auto, home, and life insurance.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained' onClick={linktolprediction}>Predict</Button>
            <Button size="small" onClick={linktolinfo}>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={healthimg}
            alt="Health insurance"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Health insurance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The amount you pay for your health insurance every month. In addition to your premium, you usually have to pay other costs for your health care, including a deductible, copayments, and coinsurance.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained' onClick={linktomprediction}>Predict</Button>
            <Button size="small" onClick={linktominfo}>Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <Button onClick={refreshpredictions}>Refresh</Button>
      <div className='dflexc'>
        <h4>life insurance premium prediction</h4>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>age</th>
              <th scope='col'>diabetes</th>
              <th scope='col'>bloodpressure</th>
              <th scope='col'>transplant</th>
              <th scope='col'>chronicdisease</th>
              <th scope='col'>height</th>
              <th scope='col'>weight</th>
              <th scope='col'>allergies</th>
              <th scope='col'>cancer</th>
              <th scope='col'>surgeries</th>
              <th scope='col'>prediction</th>
              <th scope='col'>delete</th>
            </tr>
          </thead>
          <tbody>
            {lifepredictions.map((p, id) => {
              return (
                <tr key={id}>
                  <th scope='row'>{id + 1}</th>
                  <td>{p.data.age}</td>
                  <td>{p.diabetes ? 'yes' : 'no'}</td>
                  <td>{p.bloodpressure ? 'yes' : 'no'}</td>
                  <td>{p.transplant ? 'yes' : 'no'}</td>
                  <td>{p.chronicdisease ? 'yes' : 'no'}</td>
                  <td>{p.data.height}</td>
                  <td>{p.data.weight}</td>
                  <td>{p.allergies ? 'yes' : 'no'}</td>
                  <td>{p.cancer ? 'yes' : 'no'}</td>
                  <td>{p.surgeries ? 'yes' : 'no'}</td>
                  <td>{p.prediction}</td>
                  <td><button
                    onClick={() => { deleteLPrediction(p.id) }}
                    style={{ cursor: "pointer" }}><AiOutlineDelete/>
                  </button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <h4>medical insurance premium prediction</h4>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>age</th>
              <th scope='col'>bmi</th>
              <th scope='col'>children</th>
              <th scope='col'>gender</th>
              <th scope='col'>region</th>
              <th scope='col'>smoker</th>
              <th scope='col'>prediction</th>
              <th scope='col'>delete</th>
            </tr>
          </thead>
          <tbody>
            {medicalpredictions.map((p, id) => {
              return (
                <tr key={id}>
                  <th scope='row'>{id + 1}</th>
                  <td>{p.data.age}</td>
                  <td>{p.data.bmi}</td>
                  <td>{p.data.children}</td>
                  <td>{p.data.gender}</td>
                  <td>{p.data.region}</td>
                  <td>{p.data.smoker}</td>
                  <td>{p.prediction[0]}</td>
                  <td><button
                    onClick={() => { deleteMPrediction(p.id) }}
                    style={{ cursor: "pointer" }}><AiOutlineDelete/>
                  </button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
        // age : age,
        // diabetes : diabetes,
        // bloodpressure :bloodpressure,
        // transplant : transplant,
        // chronicdisease :chronicdisease,
        // height : height,
        // weight : weight,
        // allergies : allergies,
        // cancer : cancer,
        // surgeries : surgeries,
        // prediction : prediction
// {
// "age" : 19,
// "diabetes" : 0,
// "bloodpressure" :0,
// "transplant" : 0,
// "chronicdisease" :0,
// "height" : 170,
// "weight" : 46,
// "allergies" : 1,
// "cancer" : 0,
// "surgeries" : 0
// }