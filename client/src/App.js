import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import Homepage from "./components/Home/Homepage";
import Register from "./components/Insc/Register";
import SignIn from "./components/Insc/SignIn";
import ProductList from "./components/Prod/ProductList";
import Produit from "./components/Prod/Produit";
import {Routes ,Route} from 'react-router-dom'
import NavbarUser from "./components/Navbar/NavbarUser";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profil/Profil";
import { useEffect } from "react";
function App() {
  // useEffect(()=>{
  //   alert("hello")
  // })
  return (
    <div>
      {localStorage.getItem('accessToken') ? <NavbarUser/> : <Navbar/>}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/product/:id" element={<Produit />} />
        <Route path="/profile" element={<Profile />}/>


      </Routes>
    </div>
  );
}

export default App;
