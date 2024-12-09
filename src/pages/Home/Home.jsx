import React,{useEffect,useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
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
import Frame140 from "../../assets/Frame140.png";
import Frame141 from "../../assets/Frame141.png";
import Frame142 from "../../assets/Frame142.png";
import rounded1 from "../../assets/rounded1.png";
import rounded2 from "../../assets/rounded2.png";
import rounded3 from "../../assets/rounded3.png";
import rounded4 from "../../assets/rounded4.png";
import BrahamMahotsavLogo from "../../assets/Braham-Mahotsav-Logo.png";
import Aradhana from "../../assets/aradhan.png";
import AradhanaLogo from "../../assets/Aaradhana-Logo.png";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.HomeWrapper}>
      {!mobile && (
        <Navbar />
      )}
      <Slider assest={assest1} type={"img"} altText={"Section 1"} />
      <div className={styles.section2}>
        <div className={styles.section2ImgConatiner}>
          {!mobile && (
          <div className={styles.section2LeftSideImg}>
            <img src={Julo} alt="Ghanshyam Julo" />
          </div>
          )}
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
                  <span class="material-symbols-outlined">play_circle</span>{" "}
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
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
            <img src={group4} alt="group 4" />
          </div>
          <div className={styles.imgBox}>
            <img src={group3} alt="group 3" />
          </div>
          <div className={styles.imgBox}>
            <img src={group2} alt="group 2" />
          </div>
          <div className={styles.imgBox}>
            <img src={group1} alt="group 1" />
          </div>
        </div>
        <div className={styles.aayojanWrapper}>
            <p className={styles.aayojanHeaders}>Panch Dinatmak Aayojan</p>
            <div className={styles.aayojanDiv}>
              <div className={styles.aayojanDivContent}>
                <div className={styles.aayojanImgWrapper}>
                  <img src={Frame140} alt="Aayojan Images" className={styles.aayojanIMg} />
                </div>
                <div className={styles.aayojanRectWrapper}>
                  <div className={styles.aayojanRect}>
                    <h4>પૂજનોત્સવ</h4>
                    <p>મંત્રોચાર દ્વારા નિત્ય સપ્ત આવર્તનથી પ્રભુનો પૂજનોત્સવ</p>
                  </div>
                </div>
              </div>
              <div className={styles.aayojanDivContent}>
                <div className={styles.aayojanImgWrapper}>
                  <img src={Frame141} alt="Aayojan Images" className={styles.aayojanIMg} />
                </div>
                <div className={styles.aayojanRectWrapper}>
                  <div className={styles.aayojanRect}>
                  <h4>મહાભિષેક</h4>
                  <p>નિત્ય રાજોપચાર પૂજનવિધિ સાથે પ્રભુનો મહાભિષેક</p>
                  </div>
                </div>
              </div>
              <div className={styles.aayojanDivContent}>
                <div className={styles.aayojanImgWrapper}>
                  <img src={Frame142} alt="Aayojan Images" className={styles.aayojanIMg} />
                </div>
                <div className={styles.aayojanRectWrapper}>
                  <div className={styles.aayojanRect}>
                  <h4>અન્નકૂટ</h4>
                  <p>નિત્ય ઘનશ્યામ પ્રભુ આગળ વિવિધ પ્રકારની સામગ્રી દ્વારા અન્નકૂટ</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.section5}>
        <div className={styles.howToParticipateSections}>
            <div className={styles.howToParticipateSectionsHeaders}>
              <p>How to Participate</p>
            </div>
            <div className={styles.howToParticipateSectionsContent}>
              <div className={styles.howToParticipateBox}>
                <div className={styles.roundedImg}>
                  <img src={rounded1} alt="Round img" />
                </div>
                <div className={styles.roundedImgText}><p>Har Ghar Zula</p></div>
                <div className={styles.roundedImgButton}>
                  <button>Learn More</button>
                </div>
              </div>
              <div className={styles.howToParticipateBox}>
                <div className={styles.roundedImg}>
                  <img src={rounded2} alt="Round img" />
                </div>
                <div className={styles.roundedImgText}><p>Atetnd Event at <br /> Surat Gurukul</p></div>
                <div className={styles.roundedImgButton}>
                  <button>Learn More</button>
                </div>
              </div>
              <div className={styles.howToParticipateBox}>
                <div className={styles.roundedImg}>
                  <img src={rounded3} alt="Round img" />
                </div>
                <div className={styles.roundedImgText}><p>Live Webstream</p></div>
                <div className={styles.roundedImgButton}>
                  <button>Learn More</button>
                </div>
              </div>
              <div className={styles.howToParticipateBox}>
                <div className={styles.roundedImg}>
                  <img src={rounded4} alt="Round img" />
                </div>
                <div className={styles.roundedImgText}><p>Watch On TV Channel</p></div>
                <div className={styles.roundedImgButton}>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.registrationSection}>
          <div className={styles.registrationSectionButton}>
            <button>Registration</button>
          </div>
          <p>Registration for Brahm Mahotsav Sadhna - Aradhna</p>
        </div>
      </div>
      <div className={styles.section6}>
        <div className={styles.section6Headers}>
          <div className={styles.section6HeadersImgWrapper}>
            <img src={BrahamMahotsavLogo} alt="Braham-Mahotsav-Logo" />
          </div>
          <p>To please the lord, thousands of devotees will Nrutya together in worship</p>
          <h3>13 to 17 April 2024, 8 PM to 10 PM</h3>
          </div>
          <div className={styles.section6ImgWrapper}>
            <img src={Aradhana} alt="Aradhana" />
          </div>
          <div className={styles.section6FootersImgWrapper}>
            <img src={AradhanaLogo} alt="Aardhana-Logo" />
          </div>
      </div>
      <div className={styles.section7}>
        <div></div>
       <div className={styles.section7Content}>
       <p>Donate for <br /> <span>Brahm Mahotsav</span></p>
       <button>Donate</button>
       </div>
      </div>
      <Footer/>
    </div>
  );
}
