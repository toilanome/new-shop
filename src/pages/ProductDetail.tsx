import React from 'react'
import img2 from '../Images/img2.png'
const ProductDetail = () => {
    return (
        <div className='container flex justify-center'>
            <div >
                <div className='flex gap-28'>
                    <div>
                        <img src={img2} style={{ height: '700px' }} alt="" />
                    </div>

                    <div className='info '>
                        <div>
                            <span>Jewelty   /   Earrings</span>

                            <div className='mb-3 mt-3'>

                                <h2>Kaila Dress Es</h2>
                            </div>

                            <span>Collection fw'20</span>
                            <br />
                            <div className='mb-3 mt-3'>
                                <span>Black OAK</span>

                            </div>
                            <br />
                            <div className='w-64 mb-5'>
                                <span>LARGE STATEMENT RING. BALL MEASURES 0.75 INCHES.</span>

                            </div>
                        </div>

                        <div>
                            Size : <select name="" id="">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="L">XL</option>
                            </select>
                            <br />
                            <div className='mt-5'>
                                Quanlity <input type="number" />

                            </div>
                            <br />

                            <span>$ 550.00</span>
                        </div>

                        <div className='mt-9'>
                            <button className='w-full bg-black text-white'>ADD TO CART</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail
