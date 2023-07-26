import React, { useMemo } from "react";
import {Fragment, useState, useEffect } from "react";
import PreLoader from "./pages/PreLoader/PreLoader";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import Ambassadar from "./components/Ambassadar/Ambassadar";
import Alumni from "./components/Alumni/Alumni";
import ContactUs from "./components/ContactUs/ContactUs";
import Overlay from "./components/Overlay/Overlay"
import { faL } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [preloader, setPreloader] = useState(false)
  const [overlay, setOverlay] = useState(true)
  const [isloading, setIsLoading] = useState([]);

  useEffect(() => {
    localStorage.setItem('isLoading', JSON.stringify("7"));
  }, [isloading]);
  

  return (
    <Fragment>
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Ambassadar />
      <ContactUs />
    </Fragment>
  );
}

export default App;
