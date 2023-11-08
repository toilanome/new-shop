import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateProduct from './Product/CreateProduct'
import ListProduct from './Product/ListProduct'
import UpdateProduct from './Product/UpdateProduct'

const AdminLayout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<ListProduct />} />
                <Route path='/add-product' element={<CreateProduct />} />
                <Route path='/edit-product/:id' element={<UpdateProduct />} />
            </Routes>





        </>

    )
}

export default AdminLayout
