import React from "react";
import {About, Contact, Header, Home, ParticlesContainer, Projects, Skills} from './'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Footer";


const App = () => {

  return (
    <div className=" xl:w-[1500px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      <BrowserRouter>
        {/* header */}
        <Header/>
        {/* particles container */}
        <ParticlesContainer/>
        {/* home container */}
        <Home/>
        {/* about container */}
        <About/>
        {/* skills container */}
        <Skills/>
        {/* projects container */}
        <Projects/>
        {/* contact container */}
        <Contact/>
        {/* footer container */}
        <Footer/>
      </BrowserRouter>

      
    </div>
  );
};

export default App;
