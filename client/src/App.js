import React from 'react';   //importing React
import './App.css';
import Foods from './components/pages/Foods.js';
import About from './components/pages/About.js';
import Navbar from './components/pages/Navbar.js';
import RegisterForm from './components/pages/RegisterForm.js';
import LoginForm from './components/pages/LoginForm.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";      //importing components from react-router-dom
import { UserProvider, userProvider } from './context/userContext';   //importing userProvider from userContext.js
const foods = [   //array sent over as a React prop
  {
    id: 858930,
    title: "Garden Kale and Frozen Blueberry smoothie"
  },
  {
    id: 1111,
    title: "Shrimp Quesadillas with fresh Pico de Gallo"
  },
  {
    id: 5555,
    title: "Chicken Teriyaki with Udon Noodles"
  },
  {
    id: 33333,
    title: "Iced Caramel Latte with Almond Milk"
  },
  {
    id: 22222,
    title: "Hot Pumpkin Spice Latte with Whipped Cream"
  },
  {
    id: 44444,
    title: "Pumpkin Cinnamon scone"
  },
  {
    id: 6662,
    title: "Spicy Garden Salsa with Tortilla Chips"
  },
  {
    id: 12,
    title: "Iced Cold Brew with Lavender Cold Foam <3"
  },
  {
    id: 13,
    title: "Hot Black Coffee"
  }
];


function App() {
  return (
    <div className="App">
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<About />}/>
        <Route path="foods" element={<Foods foods={foods} />}/>
        <Route path="login" element={<LoginForm />}/>
        <Route path="register" element={<RegisterForm />}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>

    </div>
  );
}

export default App;
