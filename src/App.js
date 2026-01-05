import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import MouseFollower from './components/MouseFollower';
import Spline from "@splinetool/react-spline";


import { Routes, Route } from "react-router-dom";
import { Events } from "./components/Events";

function App() {
  return (
    <div className="App">
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/iZIQY7nZzMSUWoDH/scene.splinecode" />
      </div>
      <MouseFollower />
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
