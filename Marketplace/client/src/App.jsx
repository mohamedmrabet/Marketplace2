import React, { useState } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Categories from "./pages/categories/Categories.jsx";
import Products from "./pages/products/Products.jsx";
import Create from "./pages/Create/Create.jsx";
import Onepage from "./pages/Onepage/Onepage.jsx";
import Official from "./Signup&Login/official";
import axios from "axios"
import Navbar from "./page_comp/navbar";
import Product from "./oneprod/Product.jsx";
import './App.css';
import Admin from "./admin/Admin.jsx";
import Dashboard from "./admin/Dashboard.jsx";

function App() {
const [idCategorie,setCategorie]=useState(0)
axios.defaults.withCredentials=true

  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Official/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/categories" element={<Categories setCategorie={setCategorie} />} ></Route>
          <Route path="/products" element={<Products idCategorie={idCategorie} />}></Route> 
          <Route path="/create" element={<Create />}></Route>
          <Route path="/one" element={<Product/>}> </Route> */}
          <Route path="/admin" element={<Admin/>} ></Route>
          <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;