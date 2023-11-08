import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import ListProduct from '../Admin/Product/ListProduct';
import CreateProduct from '../Admin/Product/CreateProduct';
import UpdateProduct from '../Admin/Product/UpdateProduct';
import Header from './Header';
import HomePage from './HomePage';

const PageLayout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    )
}

export default PageLayout
