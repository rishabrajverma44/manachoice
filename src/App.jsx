import React from "react";
import Header from "./comonents/Header/Header";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from "./comonents/Hero/Hero";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Information from "./comonents/Info/Information";
import Footer from "./comonents/FooterSection/Footer";
import Image from "./comonents/ImageCard/Image";

const App = () => {
  return (
    <>
      {/* <Header />
      <Hero />
      <Information />
      <Footer />
      <ToastContainer position="bottom-right" /> */}

      <Header />
      <Image />
    </>
  );
};

export default App;
