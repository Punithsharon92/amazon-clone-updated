/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Products from "./Products";
import ProductDisplay from "./ProductDisplay";
import Checkout from "./Checkout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./Context/amazon-context";
import Payment from "./Payment";
import PaymentSucess from "./Payment-assets/PaymentSucess";
import Orders from "./Orders";

function App() {
  const amazonCtx = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        amazonCtx.userSignedIn(user);
        // console.log(username.email);
        console.log(user);
      } else {
        // User is signed out
        amazonCtx.userSignedOut();
      }
    });
    // will only run once when the app component LoadBundleTask...
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-container">
          <Routes>
            <Route
              path='/'
              element={
                <div>
                  <Home />
                </div>
              }
            />
            <Route
              path='/Login'
              element={
                <div>
                  <Login />
                </div>
              }
            />
            <Route
              path='/Products'
              element={
                <div>
                  <Products />
                </div>
              }
            />
            <Route
              path='/ProductDisplay'
              element={
                <div>
                  <ProductDisplay />
                </div>
              }
            />
            <Route
              path='/Checkout'
              element={
                <div>
                  <Checkout />
                </div>
              }
            />
            <Route
              path='/Payment'
              element={
                <div>
                  <Payment />
                </div>
              }
            />
            <Route
              path='/PaymentSuccess'
              element={
                <div>
                  <PaymentSucess />
                </div>
              }
            />
            <Route
              path='/Orders'
              element={
                <div>
                  <Orders />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
