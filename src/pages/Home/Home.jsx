import React from "react";
import Slider from "../../components/Slider/Slider";
import assest1 from "../../assets/slider1.png";
import styles from "./Home.module.css";
import Julo from "../../assets/JuloImg.png";
import Vector from "../../assets/Vector.svg";
import Line from "../../assets/Line 1.svg";
import group1 from "../../assets/group1.png";
import group2 from "../../assets/group2.png";
import group3 from "../../assets/group3.png";
import group4 from "../../assets/group4.png";
import PanchDinatmak from "../../components/PanchDinatmak/PanchDinatmak.jsx";
import Particiapte from "../../components/HowToParticipate/HowToParticipate.jsx";
import Registrationsec from "../../components/registrationsec/registrationsec.jsx";
import EventBanner from "../../components/EventBanner/EventBanner.jsx";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer/Footer.jsx";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider assest={assest1} type={"img"} altText={"Section 1"} />
      <div className={styles.section2}>
        <div className={styles.section2ImgConatiner}>
          <div className={styles.section2LeftSideImg}>
            <img src={Julo} alt="Ghanshyam Julo" />
          </div>
          <div className={styles.section2RightSideWrapper}>
            <div className={styles.section2RightSide}>
              <div className={styles.HeadersRightSide}>
                <h1>Why Brahm Mahotsav ?</h1>
              </div>
              <div className={styles.ContentRightSide}>
                <p>
                  અક્ષરેશ વાત્સલ્યમૂર્તિ મહાપ્રભુ ભગવાન શ્રી સ્વામિનારાયણના
                  પ્રાગટ્ય પર્વની આરાધન નૃત્ય, પ્રભુ પૂજન સહ ભવ્યાતિભવ્ય ઉજવણીઓ
                  એટલે બ્રહ્મ મહોત્સવ.
                </p>
                <p>
                  ચૈત્રી નવરાત્રીના પવિત્ર કાળમાં માનવને શક્તિથી સુસજ્જ કરવા....
                  તપ, જપ, ઝૂલા દ્વારા માનવહૈયામાં પ્રેમના પ્રાગટ્ય અર્થે....
                  લાખો પરિવારોમાં ભારતીય સાંસ્કૃતિક પરંપરાઓનું સિંચન કરવા....
                  સાધના,આરાધના, ઉપાસના દ્વારા આધ્યાત્મિક ઉર્જાથી ઉર્જાશીલ માનવના
                  નિર્માણ....
                </p>
                <p>એટલે બ્રહ્મ મહોત્સવ....</p>
              </div>
              <div className={styles.WatchNowButtonWrapper}>
                <button>
                  <span className="material-symbols-outlined">play_circle</span>{" "}
                  Watch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3Wrapper}>
        <div className={styles.section3}>
          <h1>Live Event</h1>
          <div className={styles.section3LiveEventBox}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jsmmn4obFAw?si=YhimR65oeSBOtyb3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.LiveEventFooter}>
            <div className={styles.LiveEventFooterImgDesign}>
              <img src={Vector} alt="design svg" />
            </div>
            <div className={styles.LiveEventFooterContent}>
              <h1>2024</h1>
              <img height={"120"} src={Line} alt="Line" />
              <p>
                Brahm Mahotsav <br /> Celebrations
              </p>
            </div>{" "}
            <br />
            <p style={{ textAlign: "center" }}>
              ભગવાન શ્રી સ્વામિનારાયણના પ્રાગટ્યોત્સવ પર્વે હર ઘર ઝૂલા,
              પૂજનોત્સવ તથા આરાધન નૃત્ય દ્વારા <br />
              ભક્તો બ્રહ્મ મહોત્સવની ઉજવણી કરશે
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.imagesWrapper}>
          <div className={styles.imgBox}>
            <img src={group1} alt="group 1" />
          </div>
          <div className={styles.imgBox}>
            <img src={group2} alt="group 2" />
          </div>
          <div className={styles.imgBox}>
            <img src={group3} alt="group 3" />
          </div>
          <div className={styles.imgBox}>
            <img src={group4} alt="group 4" />
          </div>
        </div>

        <PanchDinatmak />

      </div>
      <Particiapte />
      <Registrationsec />
      <EventBanner />
      <Footer/>
    </div>
  );
}
