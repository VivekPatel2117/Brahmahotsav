import React, { useState, useEffect, act } from "react";
import styles from "./MoblieNavbar.module.css";
export default function MoblieNavbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [routes, setRoutes] = useState([
    "/","/how-to-participate","/celebration","/flow-of-events","/registeration","/donate"
  ])
  useEffect(() => {
    const pathName = window.location.pathname
   routes.map((route,index)=>{
    if(pathName === route) {
        const activeElement = document.getElementById(pathName);
        if(!activeElement) return
        activeElement.classList.add("activeTab")
    }
   })
  }, [isSideBarOpen])
  
  return (
    <>
      {!isSideBarOpen && (
        <div className={styles.MoblieNavbarWrapper}>
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Celebration</p>
          </div>
          <div> 
            <button className={styles.MoblieNavbarCelebratioButton}>
              Donate
            </button>
          </div>
          <div onClick={() => setIsSideBarOpen(true)}>
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
      )}
      {isSideBarOpen && (
        <div className={styles.sidebarWrapper}>
          <div className={styles.sidebar}>
            <div className={styles.closeWrppaer}>
              <span
                onClick={() => setIsSideBarOpen(false)}
                class="material-symbols-outlined"
              >
                close
              </span>
            </div>
            <div className={styles.menuWrapper}>
              <div id="/" className={styles.menuItems}>
                <p>Home</p>
                <span class="material-symbols-outlined">home</span>
              </div>
              <div id="/how-to-participate" className={styles.menuItems}>
                <p>How to Participate</p>
                <span class="material-symbols-outlined">groups</span>
              </div>
              <div id="/celebration" className={styles.menuItems}>
                <p>Celebration</p>
                <span class="material-symbols-outlined">person_celebrate</span>
              </div>
              <div id="/flow-of-events" className={styles.menuItems}>
                <p>Flow of events</p>
                <span class="material-symbols-outlined">event_upcoming</span>
              </div>
              <div id="/registeration" className={styles.menuItems}>
                <p>Registration</p>
                <span class="material-symbols-outlined">app_registration</span>
              </div>
              <div id="/donate" className={styles.menuItems}>
                <p style={{color:"rgba(225, 180, 67, 1)"}}>Donate</p>
                <span style={{color:"rgba(225, 180, 67, 1)"}} class="material-symbols-outlined">
                  volunteer_activism
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
