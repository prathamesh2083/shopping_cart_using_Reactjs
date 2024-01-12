import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify'
export default function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2052}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}
