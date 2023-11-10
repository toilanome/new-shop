import React from 'react'
import './NewLetter.css'
const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Offer Email</h1>
        <p>Subcribe Email Product</p>
       <div>
        <input type="email"  placeholder='Your Email'/>
        <button>Subcribe</button>
        </div> 
    </div>
  )
}

export default NewLetter
