
import {Routes,Route,useLocation} from 'react-router-dom';
//import React from 'react'


import Contact from './component/Contact'
//import Foot from './component/Foot'
//import Navbar from './component/Navbar'
import Login from './component/user/Login'
import Register from './component/user/Register';
import Navbar from './component/Navbar';
//import Register from './component/user/Register'
 //import AppContext from './context /AppContext';
// import ShowOrderProduct from './component/ShowOrderProduct';
import ShowProduct from './component/product/ShowProduct';
import ProductDetail from './component/product/ProductDetail';
import AddProduct from './component/product/AddProduct';
import SearchProduct from './component/product/SearchProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminShowProduct from './component/AdminShowProduct';
import EditProduct from './component/EditProduct';
import AdminLogin from './component/AdminLogin';
import Profile from './component/user/Profile';
import Cart from './component/Cart';
import Address from './component/Address';
import Checkout from './component/Checkout';
import Aboutus from './component/Aboutus';
import Faq from './component/Faq';
import Forgotpass from './component/Forgotpass';
import Changepass from './component/Changepass';
import Success from './Success';
import Failure from './Failure';
import Upi_payment from './component/Upi_payment';
import Successfull from './component/Successfull';
import PrivacyPolicy from './component/PrivacyPolicy';
import PaymentComponent from './component/PaymentComponent';
import AllOrders from './component/AllOrders';
import Userorder from './component/Userorder';
import Refundpolicy from './component/Refundpolicy';
import Terms from './component/Termm';
import Rating from './component/Rating';
import Thankyou from './component/Thankyou';



const restrictedPaths = ['/Admin', '/Edit/:id','/AdminLogin', '/AddProduct'];


const App = () => {
  const location = useLocation();

  // Check if the current path is restricted
  const isRestricted = restrictedPaths.some((path) =>
    location.pathname.startsWith(path.split('/:')[0])
  );
  return (
    <>
    {!isRestricted  && <Navbar />}
    {/* <Navbar /> */}
     <ToastContainer />
   
  <Routes>
  <Route path="/Register" element ={<Register/>} />
    <Route path="/login" element ={<Login/>} />
    <Route path="/Contact" element ={<Contact/>} />
    <Route path="/Admin" element ={<AdminShowProduct/>} />
    <Route path="/Edit/:id" element ={<EditProduct/>} />

    { /*<Route path="/AdminLogin" element ={<AdminLogin/>} /> */}
    <Route path="/AdminLogin" element ={<AdminLogin/>} />
    <Route path="/Profile" element ={<Profile/>} />
    <Route path="/Cart" element ={<Cart/>} />
    <Route path="/Address" element ={<Address/>} />
    <Route path="/Checkout" element ={<Checkout/>} />
    <Route path="/About" element ={<Aboutus/>} />
    <Route path="/Faq" element ={<Faq/>} />
    <Route path="/Forgot" element ={<Forgotpass/>} />
    <Route path="/Change" element ={<Changepass/>} />
    <Route path="/Success" element ={<Success/>} />
    <Route path="/Failure" element ={<Failure/>} />
    <Route path="/Successfull" element ={<Successfull/>} />
    <Route path="/Upi/:price" element ={<Upi_payment/>} />
    <Route path="/Privacy" element ={<PrivacyPolicy/>} />
    <Route path="/Pay" element ={<PaymentComponent/>} />
    <Route path="/Orders" element ={<AllOrders/>} />
    <Route path="/Userorder" element ={<Userorder/>} />
    <Route path="/Term" element ={<Terms/>} />
    <Route path="/Rating" element ={<Rating/>} />
    <Route path="/Thank" element ={<Thankyou/>} />
 
   <Route path="/Return" element ={<Refundpolicy/>} />

    <Route path="/" element ={<ShowProduct/>} />
    <Route path="/Product/:id" element ={<ProductDetail/>} />
    <Route path="/AddProduct" element ={<AddProduct/>} />
    <Route path="/Product/search/:term" element ={<SearchProduct/>} />
   

  </Routes>
    </>
  )
}


export default App