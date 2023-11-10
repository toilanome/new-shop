import React from 'react'
import {FaSistrix} from 'react-icons/fa6'
import Group from '../Images/Group.svg'
const Header = () => {
    return (
        <header className='bg-color' >
            
            <div className='container padding'>
            
            <div className='h-11 bg-color flex items-center text-black justify-between'>
                <h3 className='text-3xl'>Rivo</h3>
                <div className=''   >
                    <ul className='flex '>
                         <li className='mr-9 text-color '>Home</li>
                        <li className='mr-9 text-color'>Products</li>
                        <li className='mr-9 text-color'>Contacts</li>
                        <li className='mr-9 text-color'>About</li>
                        
                    </ul>
                </div>

                <div className='flex items-center'>
                    
                   <img src={Group} alt="" />
                    <button className='btn-login text-color center'>Login</button>
                </div>

            </div>
            </div>
           

        </header>
    )
}

export default Header
