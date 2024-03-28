import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route, Navigate  } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={ () => <Home/>} />
        <Route exact path="/about" Component={ () => <About/>} />
        <Route exact path="/service" Component={ () => <Service/>} />
        <Route exact path="/contact" Component={ () => <Contact/>}  />
      </Routes>
      <Footer />
    </>
  );
};

export default App;