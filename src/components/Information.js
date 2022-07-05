import { Link } from 'react-router-dom'
import React from 'react'

export default function Information() {
  return (
    <>
    <div className='dflex'>
      <Link to='info/insurance'>insurance</Link>
      <Link to='info/insurance-premium'>insurance premium</Link>
      <Link to='info/life-insurance'>Life-insurance</Link>
      <Link to='info/health-insurance'>health-insurance</Link>
    </div>
    </>
  )
}
