import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HowToParticipate from "./components/HowToParticipate/HowToParticipate";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
export default function App() {
  return (
    <div className={styles.appStructure}>
      <Navbar />
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
