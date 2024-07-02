import React from "react";
import Header from "./comonents/Header/Header";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from "./comonents/Hero/Hero";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./comonents/FooterSection/Footer";
import New from "./comonents/new/New";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <New />
      <Footer />
      <ToastContainer position="bottom-right" />

      {/* <Header />
      <Image /> */}
    </>
  );
};

export default App;
