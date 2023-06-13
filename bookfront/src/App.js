import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import ProductDisplay from './components/ProductDisplay';
import ProductUpload from './components/ProductUpload';
import ProductSort from './components/ProductSort';
import ProductEdit from './components/Edit';
import HomePagel from './components/HomePagel';

const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element ={<HomePage />} />
        <Route path="/h" element ={<HomePagel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductDisplay />} />
        <Route path="/upload" element={<ProductUpload />} />
        <Route path="/sort" element={<ProductSort />} />
        <Route path="/edit/:id" element={<ProductEdit/>} />
       
        </Routes>
    </Router>
  );
};

export default App;
