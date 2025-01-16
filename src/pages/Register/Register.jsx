import React, { useState } from "react";
import styles from "./Register.module.css";
import RegisterBanner from "../../assets/register-banner.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
export default function Register() {
  const [isFirst, setIsFirst] = useState(true);
  const [isSecond, setIsSecond] = useState(false);
  const handleNextClick = () => {
    setIsFirst(false);
    setIsSecond(true)
  }
  return (
    <div className="pageStructure">
    <Navbar/>
    <div className={styles.RegisterWrappper}>
      <div className={styles.banner}>
        <img src={RegisterBanner} alt="Ragister banner" />
      </div>
      <div className={styles.registerBox}>
        <h1>Registeration Form</h1>
        <form>
          {isFirst ? (
            <>
              <div className={styles.inputBox}>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" name="full-name" id="full-name" required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="moblie-number">Moblie Number</label>
                <input
                  type="number"
                  name="moblie-number"
                  id="moblie-number"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state" required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="district">District</label>
                <input type="text" name="district" id="district" required />
              </div>
            </>
          ) : isSecond ? (
            <>
              <div className={styles.inputBox}>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" name="full-name" id="full-name" required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="moblie-number">Moblie Number</label>
                <input
                  type="number"
                  name="moblie-number"
                  id="moblie-number"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state" required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="district">District</label>
                <input type="text" name="district" id="district" required />
              </div>
            </>
          ) : (
            <>
              <div className={styles.inputBox}>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" name="full-name" id="full-name" required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="moblie-number">Moblie Number</label>
                <input
                  type="number"
                  name="moblie-number"
                  id="moblie-number"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state" required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="district">District</label>
                <input type="text" name="district" id="district" required />
              </div>
            </>
          )}
          <div className={styles.buttonWrapper}>
            {!isFirst && <button className={styles.button}>Back</button>}
            <button className={styles.button} onClick={handleNextClick}>Next</button>
            {(!isSecond && !isFirst) && <button className={styles.button} type="submit">Submit</button>}
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
