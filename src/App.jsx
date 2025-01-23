import React,{useEffect,useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HowToParticipate from "./components/HowToParticipate/HowToParticipate";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import FlowEvents from "./pages/FlowEvents/FlowEvents";
import Participate from "./pages/Participate/Participate";
import Celebration from "./pages/Celebration/Celebration";
export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  }, [])
  
  return (
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/flowofevents"
            element={<FlowEvents />}
          />
          <Route
            path="/participate"
            element={<Participate />}
          />
           <Route
            path="/celebration"
            element={<Celebration />}
          />
        </Routes>
  );
}
