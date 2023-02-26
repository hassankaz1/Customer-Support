import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

//Pages
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Chats from "./Pages/Chat"
import Dashboard from "./Pages/Dashboard"


//Components
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
      
    
      <BrowserRouter>
      <Routes>
          <Route   path="/" element ={<Home/>}/>
          <Route  path="/login" element ={<Login/>}/>
          <Route  path="/chats" element ={<Chats/>}/>
          <Route  path="/dashboard" element ={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
