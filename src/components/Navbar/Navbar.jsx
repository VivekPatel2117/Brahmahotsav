import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../assets/Braham-Mahotsav-Logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.NavbarWrapper}>
      <div className={styles.LogoWrapper}>
        <img src={Logo} alt="Brahm Mahotsav" />
      </div>
      <div className={styles.LinksConatiner}>
        <ul className={styles.LinksWrapper}>
          <li><Link to="/" className={styles.NavLink}>Home</Link></li>
          <li><Link to="/participate" className={styles.NavLink}>How to Participate</Link></li>
          <li><Link to="/celebration" className={styles.NavLink}>Celebration</Link></li>
          <li><Link to="/events" className={styles.NavLink}>Flow of Events</Link></li>
          <li><Link to="/registration" className={styles.NavLink}>Registration</Link></li>
          <li className={styles.DonateButtonWrapper}>
            <Link to="/donate">
              <button className={styles.DonateButton}>Donate</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
