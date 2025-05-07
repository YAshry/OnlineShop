// React
import React, {Fragment} from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Home from "./HomeFiles/Home"
import Cart from './CartFiles/Cart'
import Login from "./LoginFiles/Login"
import About from "./AboutUsFiles/About"
import Header from './HeaderFiles/Header'
import Footer from "./FooterFiles/Footer"
import PageNotFound from './PageNotFound'
import Products from "./ProductFiles/Products"
import Contact from './ContactFiles/ContactUs'
import CheckOut from './CheckOutFiles/CheckOut'
import Wishlist from "./WishlistFiles/Wishlist"
import SingleProduct from './ProductFiles/SingleProduct'

// Style Sheets
import './StyleSheets/mainStyles.css'
import './StyleSheets/bootstrapstyles.css'

const MainRouter = () => {

  return (
    <Fragment>

      {/* Header */}
      <div className="row m-0 w-100 p-0">
        <Header/>
      </div>

      {/* Body */}
      <div className='main-router-body'>

        <div className=' main-router-routes '>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:category" element={<Products/>}/>
            <Route path="/products/:category/:name/*" element={<SingleProduct/>}/>
          
            <Route path="*" element={<PageNotFound/>}/>

          </Routes>
        </div>

        {/* Footer */}
        <div className='main-router-footer'>
          <Footer/>
        </div>

      </div>
    
    </Fragment>
  );
}

export default MainRouter;
