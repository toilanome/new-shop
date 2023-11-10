import React from 'react'
import './CSS/Style.css'
import footer_logo from '../Images/logo_big.png'
import instagram_icon from '../Images/instagram_icon.png'
import pintester_icon from '../Images/pintester_icon.png'
import whatsapp_icon from '../Images/whatsapp_icon.png'
import Twitter from '../Images/Twitter.svg'
import instar from '../Images/Instagram.svg'
import fb from '../Images/Facebook.svg'

const Footer = () => {
  return (
    <>
    <footer className=' footer '>
    <div className=' footer-content container'>
    <div className="footer-logo ">
        {/* <img src={footer_logo} alt="" /> */}
        <p className=' '>RIVO </p>
        <div className='mt-4 mb-6'>
        <span className='text-white'> Social Media</span>

        </div>

        <div className="footer-social">
        <div className="footer-icons-container transparent">
            <img  src={instar} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={Twitter} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={fb} alt="" />
        </div>
    </div>
    </div>
    <div className="shop text-white mt-5">
        <ul>
            <li className='text-xl font-bold mb-3'>Home</li>
            <li className='mb-3'>Products</li>
            <li className='mb-3'>Contacts</li>
            <li className='mb-3'>About</li>
        </ul>
    </div>
    <div className="company text-white mt-5">
        <ul>
            <li className='text-xl font-bold mb-3'>About us</li>
            <li className='mb-3'>Products</li>
            <li className='mb-3'> Contact</li>
            <li className='mb-3'>Support</li>
        </ul>
    </div>
    <div className="stay-up mt-5 " >
        <div className='mb-5'> 
        <span className='text-xl font-bold mb-3 text-white'>Stay up to date</span>

        </div>
        <div className='btn-footer'>
            <input type="text" placeholder='Enter your email' />
            <button>SUBMIT</button>

        </div>
    </div>
    
    
    </div>
    <div className="footer-copyright">
        <hr />
        <p>@Copyright 2023</p>
    </div>
    </footer>
    </>
    
   
  )
}

export default Footer
