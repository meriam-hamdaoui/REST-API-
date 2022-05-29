import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Add from "./components/Add";
import Update from "./components/Update";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<List />} />
        <Route path="/adds" element={<Add />} />
        <Route path="/updates/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
