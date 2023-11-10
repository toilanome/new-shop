import React, { useContext } from 'react'
import './CartItem.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopcontextMain } from '../../Context/ShopContext'
export const CartItem = () => {
    const {getTotalProduct,all_product, cartItems,addToCart, removeCart} = useContext(ShopcontextMain)
  return (
    <div className='cartitem'>
        <div className="cartitem-fomat-main">
            <p>Products</p>
            <p>Titles</p>
            <p>Prices</p>
            <p>Quanlity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e:any) =>{
            if(cartItems[e.id] >0){
                return  <div key={e.id} >
                <div  className="cartitem-fomat cartitem-fomat-main">
                    <img src={e.image} alt="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitem-quanlity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='carticon-remove-icon' src={remove_icon} onClick={() =>{removeCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null
        })}
        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitem-total-item">
                        <p>Subtatal</p>
                        <p>${getTotalProduct()}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalProduct()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitem-promocode">
                <p>If you have a promo code, enter it hear</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>

        
    </div>
  )
}
