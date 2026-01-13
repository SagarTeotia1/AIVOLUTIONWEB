// src/App.js
import React from 'react';
import  {NavBar}  from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { EventHighlights } from "./components/EventHighlights";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import MouseFollower from './components/MouseFollower';
import Spline from "@splinetool/react-spline";
import { Routes, Route } from "react-router-dom";
import { Events } from "./components/Events";
import { Sponsors } from "./components/Sponsors";
import { Vision } from "./components/Vision";

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-secondary selection:text-black">
      
      {/* Background 3D Scene - Fixed to cover the screen */}
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
        <Spline scene="https://prod.spline.design/iZIQY7nZzMSUWoDH/scene.splinecode" />
      </div>

      {/* Mouse Follower stays on top */}
      <MouseFollower />

      {/* Main Content - Relative z-10 ensures it sits ABOVE the Spline background */}
      <div className="relative z-10">
        <NavBar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Skills />
              <EventHighlights />
              <Vision />
              <Sponsors />
              <Contact />
            </>
          } />
          <Route path="/events" element={<Events />} />
        </Routes>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;