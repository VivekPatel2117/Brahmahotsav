import React from "react";
import Logo from "../../assets/Braham-Mahotsav-Logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <img src={Logo} alt="Brahm Mahotsav" className={styles.logo} />
        <p className={styles.tagline}>
          Celebrating Culture and Unity - Brahm Mahotsav
        </p>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linkGroup}>
          <h3 className={styles.footerHeading}>Celebrations</h3>
          <ul>
            <li>2023 Glimpse</li>
            <li>Photos</li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <p>📞 +91 9879000257</p>
          <p>✉️ info@brahmmahosotva.in</p>
        </div>
        <div className={styles.linkGroup}>
          <h3 className={styles.footerHeading}>Social Media</h3>
          <ul className={styles.socialMedia}>
            <li>📺 Youtube</li>
            <li>📘 Facebook</li>
            <li>💬 Whatsapp</li>
            <li>📸 Instagram</li>
            <li>🔵 Telegram</li>
            <li>✖️ Threads</li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h3 className={styles.footerHeading}>Address</h3>
          <p>
            📍 Ved Rd, Nani Ved, Narayan Munidev Society, Katargam, Surat, Gujarat
            395004
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Brahm Mahotsav. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
