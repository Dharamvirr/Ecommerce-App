// import './App.css'
import React from "react";
import Layout from "./components/Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Pagenotfound from "./pages/Pagenotfound.jsx";
import Policy from "./pages/Policy.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import PrivateRoute from "./components/Routes/Private.jsx";
import ForgotPasssword from "./pages/Auth/ForgotPassword.jsx";
import AdminRoute from "./components/Routes/AdminRoute.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import CreateCategory from "./pages/Admin/CreateCategory.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx"; 
import Users from "./pages/Admin/User.jsx";
import Orders from "./pages/user/Order.jsx";
import Profile from "./pages/user/Profile.jsx";
import Products from "./pages/Admin/Products.jsx";
import UpdateProduct from "./pages/Admin/UpdateProduct.jsx";
import Search from "./pages/Search.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryProduct from "./pages/CategoryProduct.jsx";
import CartPage from "./pages/CartPage.jsx";
import AdminOrders from "./pages/Admin/AdminOrders.jsx";
//concurrently se do commmand ek command ki madad se run karsakte hai
// do servers ko connect karna hai to koi errror na aye useke liye cors ka use karte hai

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/product/:slug" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/categories" element={<Categories></Categories>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="/category/:slug" element={<CategoryProduct></CategoryProduct>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="user" element={<Dashboard></Dashboard>}></Route>
          <Route path="user/orders" element={<Orders></Orders>}></Route>
          <Route path="user/profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route path="admin" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="admin/create-category" element={<CreateCategory></CreateCategory>}></Route>
          <Route path="admin/create-product" element={<CreateProduct></CreateProduct>}></Route>
          <Route path="admin/product/:slug" element={<UpdateProduct></UpdateProduct>}></Route>
          <Route path="admin/products" element={<Products></Products>}></Route>
          <Route path="admin/users" element={<Users></Users>}></Route>
          <Route path="admin/orders" element={<AdminOrders></AdminOrders>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/forgot-password" element={<ForgotPasssword></ForgotPasssword>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Policy" element={<Policy></Policy>}></Route>
        <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
