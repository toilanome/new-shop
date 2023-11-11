import React from 'react'
import img2 from '../Images/img2.png'
import './CSS/Style.css'
const Products = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>ALL PRODUCTS</h2>


            <div className='product'>
                <div className="col">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'>
                            <span>Kaila Dress Es</span>

                        </div>
                        <span>$ 325.00 - $ 450.00</span>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'>
                            <span>Kaila Dress Es</span>

                        </div>
                        <span>$ 325.00 - $ 450.00</span>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'>
                            <span>Kaila Dress Es</span>

                        </div>
                        <span>$ 325.00 - $ 450.00</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
