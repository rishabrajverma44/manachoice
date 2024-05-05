import React from "react";
import Header from "./comonents/Header/Header";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from "./comonents/Hero/Hero";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
