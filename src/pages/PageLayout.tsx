import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import ListProduct from '../Admin/Product/ListProduct';
import CreateProduct from '../Admin/Product/CreateProduct';
import UpdateProduct from '../Admin/Product/UpdateProduct';
import Header from './Header';
import HomePage from './HomePage';
import { Navbar } from '../components/Navbar/Navbar';
import { Shop } from './Shop';
import { Product } from './Product';
import Footer from '../components/Footer/Footer';
import { ShopCategory } from './ShopCategory';
import men_banner from '../components/Assets/banner_mens.png'
import women_banner from '../components/Assets/banner_women.png'
import kid_banner from '../components/Assets/banner_kids.png'

const PageLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Routes>
                <Route path='/' element={<Shop />} />
                
          
               
            </Routes>
            <Footer />
        </>
    )
}

export default PageLayout
