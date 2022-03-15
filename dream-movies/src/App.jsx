import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  DetailTemp,
  Movie,
  TheRealMovie,
  DetailCapitulos,
  SearchPeliculas,
  SearchPeliculasGeneros,
} from "../src/components/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temp/:idSerie" element={<DetailTemp />} />
          <Route
            path="/capitulos/:idSerie/:idTemporada"
            element={<DetailCapitulos />}
          />
          <Route
            path="/movie/:idSerie/:idTemporada/:idCapitulo"
            element={<Movie />}
          />
          <Route path="/movie/:idSerie" element={<TheRealMovie />} />
          <Route path="/search/:idPelicula" element={<SearchPeliculas />} />
          <Route path="/generos/:idPelicula" element={<SearchPeliculasGeneros />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
