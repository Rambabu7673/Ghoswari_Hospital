import React from "react";
import Home from "../Component/Home";
import About from "../Component/About";
import Services from "../Component/Services";
import Connect from "../Component/Connect.";
import Trusted from "../Component/Trusted";
import Medical_Packege from "../Packege/Medical_Packege";
import Founder from "../Component/page/Founder";
import Contact from "../Packege/Contact";



const Container = ( {mainContent, latestProduct, features} ) => {
  console.log(mainContent);
  return (
    <div>
      <Home />
      <About features={features} />
      <Services latestProduct={latestProduct} />
      <Connect />
      <Trusted />
      <Medical_Packege />
      <Founder />
      <Contact />
      
    </div>
  );
};

export default Container;
