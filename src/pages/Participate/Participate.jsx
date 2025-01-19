import React from "react";
import styles from "./Participate.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import ParcipateBanner from "../../assets/participate-banner.png";
import Vector from "../../assets/Vector.svg";
import Registrationsec from "../../components/registrationsec/registrationsec";
import Participate1 from "../../assets/participate-1.png";
import Participate2 from "../../assets/participate-2.png";

export default function Participate() {
  return (
    <div className="participate-wrapper">
      <Navbar />
      <div className="participate-content">
        <Slider
          assest={ParcipateBanner}
          altText={"Participate Banner"}
          type={"img"}
        />
        <div className={styles.participationBox}>
          <div className={styles.participationBoxContent}>
            <img src={Vector} alt="Vector" />
            <div className={styles.participationBoxContentBox}>
              <h1 style={{ color: "red" }}>બ્રહ્મ વ્રત</h1>
              <p style={{ color: "rgba(225, 180, 67, 1)" }}>
                જારો ભક્તો દ્વારા... ઉપાસ્ય ઈષ્ટદેવ શ્રીહરિની ઉપાસના રૂપે..
              </p>
              <ul>
                <li>૧. નવ દિવસ પેય (પ્રવાહી) ઉપવાસ (નીલકંઠ વ્રત)</li>
                <li>૨. નવદિવસનિત્ય ૩ગ્રાસ-કોળિયા (હરિ ચાંદ્રાયણ વ્રત)</li>
                <li>૩. નવ દિવસ ફલાહાર (વર્ણી વ્રત)</li>
                <li>૪. નવ દિવસ એક ટાઈમ ભોજન (સહજ વ્રત)</li>
                <li>
                  નોંધ : શક્ય હોય તો નવ દિવસ સફેદ વસ્ત્રો, ભૂમિ શયન તથા
                  બ્રહ્મચર્યનું પાલન કરવું.
                </li>
              </ul>
            </div>
          </div>
          <Registrationsec />
          <div className={styles.participationBoxContent}>
            <div className={styles.participationBoxContentBox}>
              <h1 style={{ color: "red" }}>ઝૂલા</h1>
              <p style={{ color: "rgba(225, 180, 67, 1)" }}>
                નવ દિવસ હજારો ઘરે પારણીયામાં ઘનશ્યામ લાલાને ઝૂલાવાશે
              </p>
              <ul>
                <li>
                  • ઘરે શણગાર સાથે સુંદર ઝૂલાની રચના કરી લાડે કોડે પારણીયામાં
                  શ્રી ઘનશ્યામ લાલાને પધરાવાશે.
                </li>
                <li>
                  • ચૈત્ર સુદ પડવાથી નવ દિવસ ગુરુકુલથી મળેલ ઓડિયો એમપીથ્રી (MP3)
                </li>
                <li>
                  {" "}
                  (સુરત ગુરુકુલ ટેલિગ્રામમાં) તથા યુ-ટયુબ (સુરત ગુરુકુલ) માં
                  બતાવેલ વિધિ પ્રમાણે સવારે તથા સાંજે પૂજન, થાળ, આરતી તથા
                  કીર્તનગાન કરી લાલાને ઝૂલાવાશે.
                </li>
              </ul>
            </div>
          </div>
          <div style={{display:"flex",marginBottom:"15vh",gap:"5vh"}} className={styles.participationBoxContent}>
            <div className={styles.participationBoxContentImgWrapper}>
                <img src={Participate1} alt="Banner-1" />
            </div>
            <div className={styles.participationBoxContentImgWrapper}>
                <img src={Participate2} alt="Banner-2" />
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
