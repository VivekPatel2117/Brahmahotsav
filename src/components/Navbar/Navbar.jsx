import React from 'react'
import Logo from '../../assets/Braham-Mahotsav-Logo.png'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div className={styles.NavbarWrapper}>
        <div className={styles.LogoWrapper}>
            <img src={Logo} alt="Brahm Mahotsav" />
        </div>
        <div className={styles.LinksConatiner}>
            <ul className={styles.LinksWrapper}>
                <li>Home</li>
                <li>How to Participate</li>
                <li>Celebration</li>
                <li>Flow of events</li>
                <li>Registration</li>
                <li className={styles.DonateButtonWrapper}><button className={styles.DonateButton}>Donate</button></li>
            </ul>
        </div>
    </div>
  )
}
