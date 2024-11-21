// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sellers from './components/Sellers';
import Buyers from './components/Buyers';
import Pricing from './components/Pricing';
import Resources from './components/Resources';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import SellerDashboard from './components/SellerDashboard/SellerDashboard';
import BuyerDashboard from './components/Buyer Dashboard/BuyerDashboard';
import SellersListing from './components/SellersListing';
import SellerProfile from './components/SellerProfile';

import HomePage from './components/HomePage';
import MAndASupport from './components/MAndASupport';
import ForSellers from './components/ForSellers';




function App() {
    return (
        <Router>
            
            <div className="App">
            
                <Header />
               
              
                <main>
                   
                   
                    <Routes>
                    <Route path="/HomePage" element={<HomePage />} />
                        <Route path="/sellers" element={<Sellers />} />
                        <Route path="/buyers" element={<Buyers />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/ForSellers" element={<ForSellers />} />
                        <Route path="/SellerProfile" element={<SellerProfile />} />
                        <Route path="/SellersListing" element={<SellersListing />} />
                        <Route path="/SellerDashboard/SellerDashboard" element={<SellerDashboard />} />
                        <Route path="/Buyer Dashboard/BuyerDashboard" element={<BuyerDashboard />} />
                        <Route path="/MAndASupport" element={<MAndASupport />} />
                        <Route path="/" element={<Navigate to='/HomePage' replace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
