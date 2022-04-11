import React, { useEffect } from "react";
import Announcement from "../Annoncer/Announcement";
import Slider from "../Annoncer/Slider";
import Bestproducts from "../Prod/Bestproducts";
import Categories from "../Catetegorie/Categories";
import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import NavbarUser from "../Navbar/NavbarUser";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Homepage = () => {

  const navigate= useNavigate()
  const isAuth = useSelector(state=> state.authReducer.isAuth)


   useEffect(()=> {
     if(!localStorage.getItem("accessToken")) {
      navigate('/signin') 
     }
   },[isAuth])

  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Bestproducts />
      <Footer />
    </div>
  );
};

export default Homepage;
