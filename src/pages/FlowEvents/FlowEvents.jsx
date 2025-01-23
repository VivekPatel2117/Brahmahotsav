import React from "react";
import styles from "./FlowEvents.module.css";
import Round from "../../assets/round.png";
import FlowBanner from "../../assets/flow-banner.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import BarBox  from "../../components/BarBox/BarBox";
export default function FlowEvents() {
  const BarArr = [
    {
      first: "9 Sep",
      second: "Mon",
    },
    {
      first: "10 Sep",
      second: "Tue",
    },
    {
      first: "11 Sep",
      second: "Wed",
    },
    {
      first: "12 Sep",
      second: "Thr",
    },
    {
      first: "13 Sep",
      second: "Fri",
    },
    {
      first: "14 Sep",
      second: "Sat",
    },
    {
      first: "15 Sep",
      second: "Sun",
    },
  ];
  return (
    <div className={styles.FlowEventsWrapper}>
      <Navbar />
      <div className={styles.FlowEventsContent}>
        <Slider assest={FlowBanner} altText={"Flow Banner"} type={"img"} />
        <h1 className={styles.HeadText}>
          <span style={{color:'red'}}>LIVE</span> Event Details
        </h1>
        <BarBox itemList={BarArr} />
        <div className={styles.roundFlowsWrapper}>
            <div className={styles.roundsFlex}>
              <div className={styles.imageRoundBox}>
                <p>5.30 AM</p>
                <img src={Round} alt="first row first coloumn" />
              </div>
              <div className={styles.imageRoundBox}>
                <p>6.00 AM</p>
                <img src={Round} alt="first row second coloumn" />
              </div>
              <div className={styles.imageRoundBox}>
                <p>6.30 AM</p>
                <img src={Round} alt="first row third coloumn" />
              </div>
            </div>
            <div className={styles.roundsFlex}>
              <div className={styles.imageRoundBox}>
                <p>5.30 AM</p>
                <img src={Round} alt="first row first coloumn" />
              </div>
              <div className={styles.imageRoundBox}>
                <p>6.00 AM</p>
                <img src={Round} alt="first row second coloumn" />
              </div>
              <div className={styles.imageRoundBox}>
                <p>6.30 AM</p>
                <img src={Round} alt="first row third coloumn" />
              </div>
            </div>
            <div className={styles.roundsFlex}>
              <div className={styles.imageRoundBox}>
                <p>5.30 AM</p>
                <img src={Round} alt="first row first coloumn" />
              </div>
              <div className={styles.imageRoundBox}>
                <p>6.00 AM</p>
                <img src={Round} alt="first row second coloumn" />
              </div>
              <div className={styles.imageRoundBox}>
                <p>6.30 AM</p>
                <img src={Round} alt="first row third coloumn" />
              </div>
            </div>
            <div className={styles.roundsFlex}>
              <div className={styles.imageRoundBox}>
                <p>5.30 AM</p>
                <img src={Round} alt="first row first coloumn" />
              </div>
              <div className={styles.imageRoundBox}>
                <p>6.00 AM</p>
                <img src={Round} alt="first row second coloumn" />
              </div>
              <div className={styles.imageRoundBox}>
                <p>6.30 AM</p>
                <img src={Round} alt="first row third coloumn" />
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
