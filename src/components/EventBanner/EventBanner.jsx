// EventBanner.jsx
import React from 'react';
import styles from './EventBanner.module.css';
import Logo from '../../assets/Braham-Mahotsav-Logo.png';
import Devotees from '../../assets/Devotees.png'

const EventBanner = () => {
  return (
    <div className={styles.eventbanner}>
      <div className={styles.headertext}>
        <img src={Logo} alt="બ્હુમ મહોત્સવ" className={styles.mahotsavimage} />
        <p>To please the lord, thousands of devotees will Nrutya together in worship</p>
        <p className={styles.eventdate}>13 to 17 April 2024, 8 PM to 10 PM</p>
      </div>

      <div className={styles.imagecontainer}>
        <img src={Devotees} alt="Devotees" className={styles.centralimage} />
      </div>

      <div className={styles.footertext}>
      <img src={Logo} alt="બ્હુમ મહોત્સવ"  />
      </div>
    </div>
  );
};

export default EventBanner;
