// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './Pages/Landing';
import UserType from './Pages/UserType';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Result from './Pages/Result';
import Product from './Pages/Buyer/Product';
import React from 'react';
import Cart from './Pages/Buyer/Cart';
import BuyerProfile from './Pages/Buyer/BuyerProfile';
import SellerProfile from './Pages/Seller/SellerProfile';
import SellerForm from './Components/Forms/SellerForm';
import UsersData from './Components/UsersData/UsersData';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="userType" element={<UserType />} />
          <Route path="SignUp" element={<SignUp/>}/>
          <Route path='home' element={<Home/>}></Route>
          <Route path='Result' element={<Result/>}></Route>
          <Route path='/products/:ItemId' element={<Product></Product>}></Route>
          <Route path='cart' element={<Cart></Cart>}></Route>
          <Route path='Bprofile' element={<BuyerProfile></BuyerProfile>}></Route>
          <Route path='Sprofile' element={<SellerProfile></SellerProfile>}></Route>
          <Route path='Sform' element={<SellerForm></SellerForm>}></Route>
          <Route path='UserData' element={<UsersData></UsersData>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
