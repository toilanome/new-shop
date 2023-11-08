import React from 'react'

const Header = () => {
    return (
        <header >
            <div className='h-11 bg-black flex justify-around items-center text-white'>
                <span>USD</span>
                <span>FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.</span>
                <span>Support</span>
            </div>
            <div className='h-11 bg-color flex items-center text-black justify-between'>
                <div className='ml-40'>
                    <ul className='flex '>
                        <li className='mr-3'>Home</li>
                        <li className='mr-3'>Products</li>
                        <li className='mr-3'>Contacts</li>
                        <li className='mr-3'>About</li>
                        <div>
                            <input type="text" placeholder='Search' />

                        </div>
                    </ul>
                </div>

                <div>
                    <span>Login</span>
                </div>

            </div>

        </header>
    )
}

export default Header
