// import { useState } from "react";

import "./App.css";
import GlobalStyles from "./GlobalStyling";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Items from "./pages/Items";
import Contact from "./pages/Contact";
import LoginSignUp from "./pages/LoginSignup";

import ForgotPassword from "./components/login-signup-components/ForgotPassword";
import Profile from "./pages/Profile";

import AdminPanel from "./pages/AdminPanel";
import ItemsCard from "./components/items-component/ItemsDetails";
import Cart from "./pages/CartPage";

function App() {
  return (
    <div>
      {/* <AuthProvider>
        <CartProvider>
          <ProfileImageProvider> */}
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login-SignUp" element={<LoginSignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Login_SignUp" element={<LoginSignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Admin-Panel" element={<AdminPanel />} />
          <Route path="/items" element={<Items />} />
          {/* <Route path="`/items/ItemsCard/${item.name}" element={<ItemsCard />} /> */}
          <Route path={`/items/:itemName/:id`} element={<ItemsCard />} />
          <Route path={`/cart`} element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
      {/* </ProfileImageProvider>
        </CartProvider>
      </AuthProvider> */}
    </div>
  );
}

export default App;
