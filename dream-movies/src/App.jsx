import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, DetailTemp, Movie } from "../src/components/index.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temp" element={<DetailTemp />} />
            <Route path="/movies" element={<Movie />} />
         </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
