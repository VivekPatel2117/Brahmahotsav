import React from "react";
import styles from "./PanchDinAtmakAyojan.module.css";
import image1 from "../../assets/group5.png";
import image2 from "../../assets/group6.png";
import image3 from "../../assets/group7.png";

const PanchDinatmak = () => {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.heading}>Panch Dinatmak Ayojan</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageCard}>
            <img src={image1} alt="Pujan" className={styles.image} />
            <div className={styles.description}>
              <h3>પુજનોત્સવ</h3>
              <p>મંગલોગીત દ્વારા નિત્ય સાધન કરવામાં આવેલ પૂજનોત્સવ</p>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={image2} alt="Mahapoojan" className={styles.image} />
            <div className={styles.description}>
              <h3>મહાપૂજન</h3>
              <p>નિત્ય રણહોપચાર પૂજન વિધિ સાથે પ્રવૃત્ત મહાપૂજન</p>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={image3} alt="Annakut" className={styles.image} />
            <div className={styles.description}>
              <h3>અન્નકૂટ</h3>
              <p>નિત્ય ધનવાદ પ્રમ આગ્રહ વિધિ પ્રસિદ્ધિ સમાપ્તિ આજમુખ</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PanchDinatmak;
