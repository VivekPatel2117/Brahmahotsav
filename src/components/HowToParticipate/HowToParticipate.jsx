import React from "react";
import styles from "./HowToParticipate.module.css";
import img8 from "../../assets/group8.png";
import img9 from "../../assets/group9.png";
import img10 from "../../assets/group10.png";
import img11 from "../../assets/group11.png";

const HowToParticipate = () => {
  const options = [
    { title: "Har Ghar Zula", imgSrc: img8, link: "#" },
    { title: "Attend Event at Surat Gurukul", imgSrc: img9, link: "#" },
    { title: "Live Webstream", imgSrc: img10, link: "#" },
    { title: "Watch On TV Channel", imgSrc: img11, link: "#" },
  ];

  return (
    <div className={styles.howtoparticipate}>
      <h2 className={styles.title}>How to Participate</h2>
      <div className={styles.optionscontainer}>
        {options.map((option, index) => (
          <div className={styles.optioncard} key={index}>
            <img src={option.imgSrc} alt={option.title} className={styles.optionimage} />
            <h3 className={styles.optiontitle}>{option.title}</h3>
            <a href={option.link} className={styles.learnmorebtn}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToParticipate;
