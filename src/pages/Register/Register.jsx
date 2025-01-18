import React, { useState } from "react";
import styles from "./Register.module.css";
import RegisterBanner from "../../assets/register-banner.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const headerTxt = `નીચેના નિયમોનું ૯ દિવસ પાલન કરવું.(આપની શારીરિક અનુકુળતા મુજબ 3 કે 5 દિવસ પણ કરી શકો છો.) 
Please Follow the following Niyams for 9 days.
(You can also do 3 or 5 days according to your physical fitness.).`;
// Handle the Next button click
export default function Register() {
  const [isFirst, setIsFirst] = useState(true);
  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);
  const handleNextClick = () => {
    if (isFirst) {
      setIsFirst(false);
      setIsSecond(true);
    } else if (isSecond) {
      setIsSecond(false);
      setIsThird(true);
    }
  };

  // Handle the Back button click
  const handleBackClick = () => {
    if (isSecond) {
      setIsSecond(false);
      setIsFirst(true);
    } else if (isThird) {
      setIsThird(false);
      setIsSecond(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pageStructure">
      <Navbar />
      <div className={styles.RegisterWrappper}>
        <div className={styles.banner}>
          <img src={RegisterBanner} alt="Ragister banner" />
        </div>
        <div className={styles.registerBox}>
          <h1>Registration Form</h1>
          <form method="post" onSubmit={handleSubmit}>
            {isFirst ? (
              <>
                <div className={styles.inputBox}>
                  <label htmlFor="full-name">Full Name</label>
                  <input type="text" name="full-name" id="full-name" required />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="moblie-number">Mobile Number</label>
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
                  <label htmlFor="q-1">
                    હું દરરોજ પ્રાતઃ સહજાનંદી પાઠશાળાનું શ્રવણ કરું છું.
                  </label>
                  <div
                    style={{ display: "flex", gap: "1vw", marginLeft: "0.7vw" }}
                  >
                    <p>હા</p>
                    <input type="radio" name="q-1" id="q-1" value={"yes"} />
                    <p>ના</p>
                    <input type="radio" name="q-1" id="q-1" value={"no"} />
                  </div>
                  <hr />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="q-2">
                    હું આજથી સંકલ્પ કરું છું કે હું આટલા સભ્યોને સહજાનંદી
                    પાઠશાળામાં જોડીશ.
                  </label>
                  <div
                    style={{ display: "flex", gap: "1vw", marginLeft: "0.7vw" }}
                  >
                    <p>હા</p>
                    <input type="radio" name="q-2" id="q-2" value={"yes"} />
                    <p>ના</p>
                    <input type="radio" name="q-2" id="q-2" value={"no"} />
                  </div>
                  <hr />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="branch">
                    આપના વિસ્તારની નજીકની શાખાનું નામ (Nearby Branch)
                  </label>
                  <select id="branch" name="branch">
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option value="grape">Grape</option>
                  </select>
                </div>
              </>
            ) : (
              isThird && (
                <>
                  <div className={styles.inputBox}>
                    <label htmlFor="head">
                      શ્રીહરિ પ્રાગટ્ય ઉત્સવ નિમિત્તે તપ (સાધના) - જપ (આરાધના) -
                      ઝૂલા (ઉપાસના)
                    </label>
                    <textarea
                      name="head"
                      id="head"
                      rows={3}
                      readonly
                      value={headerTxt}
                    ></textarea>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="q-3">તપ (સાધના) Tap (Sadhana) </label>
                    <div style={{marginBottom:"5vh"}}>
                    <select id="branch" name="branch">
                      <option value="apple">Apple</option>
                      <option value="banana">Banana</option>
                      <option value="orange">Orange</option>
                      <option value="grape">Grape</option>
                    </select>
                    </div>
                    <hr />
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="q-4">જપ (આરાધના) Jap (Aaradhana)</label>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "0.7vw",
                        alignItems: "start",
                        gap: "1vw",
                        marginBottom:"5vh"
                      }}
                    >
                      <input
                        style={{ width: "30px", height: "30px" }}
                        type="checkbox"
                        name="aaradhana"
                        id="aaradhana"
                        value={"aaradhana"}
                      />
                      <p>
                        દરરોજ 2500 ઉપરાંત મંત્રજપ (9 દિવસમાં 25,000 મંત્રજપ પૂરા
                        કરવા) - Daily 2500 Mantra Jap (Complete 25000 Mantra Jap
                        in 9 days)
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="q-5">ઝૂલા (ઉપાસના) Jhula (Upasana) *</label>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "0.7vw",
                        alignItems: "start",
                        gap: "1vw",
                        marginBottom:"5vh"
                      }}
                    >
                      <input
                        style={{ width: "30px", height: "30px" }}
                        type="checkbox"
                        name="upasana"
                        id="upasana"
                        value={"upasana"}
                      />
                      <p>
                      પોતાના ઘરે  ૯ દિવસ ઝૂલામાં ભક્તિભાવ પૂર્વક ઘનશ્યામ લાલાને ઝુલાવવા અને સવાર - સાંજ પૂજન કરવું. Swing Ghanshyam Lala with devotion in a swing for 9 days at your home and worship morning-evening.
                      </p>
                    </div>
                    <hr />
                  </div>
                </>
              )
            )}
            <div className={styles.buttonWrapper}>
              {!isFirst && (
                <button
                  type="button"
                  className={styles.button}
                  onClick={handleBackClick}
                >
                  Back
                </button>
              )}
              {isThird && (
                <button className={styles.button} type="submit">
                  Submit
                </button>
              )}
              {!isThird && (
                <button
                  type="button"
                  className={styles.button}
                  onClick={handleNextClick}
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
