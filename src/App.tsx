import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout.tsx";
import "./App.css";
import "./index.css";
import Home from "./pages/home.tsx";
import Books from "./pages/books.tsx";
import "./css/home.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* path="/" */}
        <Route path="/pages/books" element={<Books />} />
        {/* path="/books" */}
      </Route>
    </Routes>
  );
}

export default App;
