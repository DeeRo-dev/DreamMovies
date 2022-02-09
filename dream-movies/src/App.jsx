import { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import DetailTemp from "./components/DetailTemp/DetailTemp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temp" element={<DetailTemp />} />
         </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
