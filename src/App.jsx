import React,{useEffect,useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HowToParticipate from "./components/HowToParticipate/HowToParticipate";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
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
    <div className={styles.appStructure}>
      {!isMobile && <Navbar />}
      <div className={styles.innerBody}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            index
            path="/howtoparticipate"
            element={<HowToParticipate />}
          />
        </Routes>
      </div>
    </div>
  );
}
