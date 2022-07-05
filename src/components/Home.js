import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Authcontext';
import '../CSS/Home.css'
import sidepik1 from '../img/40781.jpg'

export default function Home() {
    
  const { currentUser } = useAuth()
    return (
        <>
            <div className='section1'>
                <div>
                    <h1>Insurance Policy <span>Premium</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <Link to='/predictions'>Predict</Link>
                </div>
                <div>
                    <img src={sidepik1}/>
                </div>
            </div>
            
        </>
    )
}
