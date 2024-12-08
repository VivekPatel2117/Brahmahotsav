import React from "react";
import styles from "./Footer.module.css";
import BrahmLogo from "../../assets/બ્રહ્મ-મહોત્સવ.png";
import youtube from "../../assets/svgs/youtube.svg";
import facebook from "../../assets/svgs/facebook.svg";
import whatsapp from "../../assets/svgs/whatsapp.svg";
import telegram from "../../assets/svgs/telegram.svg";
import instagram from "../../assets/svgs/instagram.svg";
import twitter from "../../assets/svgs/twitter.svg";
export default function Footer() {
  return (
    <div className={styles.FooterWrapper}>
      <div className={styles.footerImg}>
        <img src={BrahmLogo} alt="Logo" />
      </div>
      <div className={styles.FooterContent}>
        <div className={styles.FooterColoumns}>
          <div className={styles.FooterHeaders}>
            <p>Celebrations</p>
          </div>
          <div className={styles.FooterList}>
            <ol>
              <li>Glimpse 2024</li>
              <li>Photos</li>
            </ol>
          </div>
        </div>
        <div className={styles.FooterColoumns}>
          <div className={styles.FooterHeaders}>
            <p>Contact Us</p>
          </div>
          <div className={styles.FooterList}>
            <ol>
              <li>
                {" "}
                <span class="material-symbols-outlined">smartphone</span>
                +919879000257
              </li>
              <li>
                <span class="material-symbols-outlined">mail</span>
                info@brahmmahosotva.in
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.FooterColoumns}>
          <div className={styles.FooterHeaders}>
            <p>Social Media</p>
          </div>
          <div className={styles.FooterList}>
            <ol>
              <li> <img src={youtube} alt="YouTube" />YouTube</li>
              <li> <img src={facebook} alt="YouTube" />Facebook</li>
              <li> <img src={whatsapp} alt="YouTube" />WhatsApp</li>
              <li> <img src={instagram} alt="YouTube" />Instagram</li>
              <li> <img src={telegram} alt="YouTube" />Telegram</li>
              <li> <img src={twitter} alt="YouTube" />Twitter</li>
            </ol>
          </div>
        </div>
        <div className={styles.FooterColoumns}>
          <div className={styles.FooterHeaders}>
            <p>Address</p>
          </div>
          <div className={styles.FooterList}>
            <ol>
              <li>
                <span class="material-symbols-outlined">location_on</span>Ved Rd, Nani Ved, Narayan Munidev Society, Katargam, Surat,
                Gujarat 395004
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
