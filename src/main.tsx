// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./components/login-signup-components/AuthContext.tsx";
import { CartProvider } from "./components/cart-components/CartContext.tsx";
import { ProfileImageProvider } from "./pages/ProfileImageContext..tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    <AuthProvider>
      <CartProvider>
        <ProfileImageProvider>
          <App />
        </ProfileImageProvider>
      </CartProvider>
    </AuthProvider>
  </div>
);
