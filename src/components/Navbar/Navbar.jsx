import React, { useState, useEffect } from "react";
import Logo from "../../assets/Braham-Mahotsav-Logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className={styles.NavbarWrapper}>
          <div className={styles.LogoWrapper}>
            <img src={Logo} alt="Brahm Mahotsav" />
          </div>
          <span
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            className="material-symbols-outlined"
          >
            menu
          </span>
          {isSideBarOpen && (
            <div className={styles.sidebar}>
              <ul>
                <li><Link className="link" to={"/"}>Home</Link></li>
                <li>How to Participate</li>
                <li>Celebration</li>
                <li>Flow of events</li>
                <li>
                  <Link className="link" to={"/register"}>Registration</Link>
                </li>
                <li className={styles.DonateButtonWrapper}>
                  <button className={styles.DonateButton}>Donate</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.NavbarWrapper}>
          <div className={styles.LogoWrapper}>
            <img src={Logo} alt="Brahm Mahotsav" />
          </div>
          <div className={styles.LinksConatiner}>
            <ul className={styles.LinksWrapper}>
              <li><Link className="link" to={"/"}>Home</Link></li>
              <li>How to Participate</li>
              <li>Celebration</li>
              <li>Flow of events</li>
              <li>
                <Link className="link" to={"/register"}>Registration</Link>
              </li>
              <li className={styles.DonateButtonWrapper}>
                <button className={styles.DonateButton}>Donate</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
