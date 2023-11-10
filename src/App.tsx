import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import './App.css'
import ListProduct from './Admin/Product/ListProduct';
import CreateProduct from './Admin/Product/CreateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProduct from './Admin/Product/UpdateProduct';
import HomePage from './pages/HomePage';
import Header from './pages/Header';
import PageLayout from './pages/PageLayout';
import AdminLayout from './Admin/AdminLayout';
import { ShopCategory } from './pages/ShopCategory';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import { Product } from './pages/Product';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>


      <Router>
        <Routes>
          <Route path='/' element={<PageLayout />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='mens' />} />
                <Route path='/girls' element={<ShopCategory banner={women_banner} category="women" />} />
                <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
                <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product />}/>````
          </Route>
          <Route path='/admin/*' element={<AdminLayout />} />
        </Routes>
      </Router>



      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />


      

    </>
  )
}

export default App
