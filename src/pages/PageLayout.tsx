import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';

import Footerne from './Footer';
import Products from './Products';

const PageLayout = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<Products />} />



            </Routes>
            <Footerne />
        </>
    )
}

export default PageLayout
