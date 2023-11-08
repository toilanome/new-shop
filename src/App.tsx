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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<PageLayout />} />
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
