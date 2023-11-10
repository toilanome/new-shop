import React from 'react'
import './Breakculm.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export const Breakculm = () => {
  return (
    <div className='Breakculm'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
         {/* {product.category}  */}
         <img src={arrow_icon} alt="" /> 
        
        {/* {product.name} */}
    </div>
  )
}
