import axios from 'axios';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from '../src/style/app.css'
import Navbar from "./Navbar/Navbar";
import About from "./Pages/About";
import Todo from "./Pages/Todo";

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/todo" element={<Todo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
