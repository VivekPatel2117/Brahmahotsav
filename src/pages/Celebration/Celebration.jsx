import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Celebration.module.css";
import CelebrationImg from "../../assets/celebration.png";
import BarBox from "../../components/BarBox/BarBox";
import Footer from "../../components/Footer/Footer";
export default function Celebration() {
  const [images] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      src: CelebrationImg, // Use the imported image path
    }))
  );

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const itemList = [
    {
      first: <span class="material-symbols-outlined">image</span>,
      second: "Image",
    },
    {
      first: <span class="material-symbols-outlined">play_circle</span>,
      second: "Video",
    },
    {
      first: <span class="material-symbols-outlined">music_note</span>,
      second: "Kirtans",
    },
    {
      first: <span class="material-symbols-outlined">favorite</span>,
      second: "Events",
    },
  ];
  const itemList2 = [
    {
      first: "Har Ghar Zula",
      second: "",
    },
    {
      first: "Vrat Dixa",
      second: "",
    },
    {
      first: "Bal Prabhu Poojan",
      second: "",
    },
    {
      first: "Pragatyotsav",
      second: "",
    },
    {
      first: "Maha Abhishek",
      second: "",
    },
    {
      first: "Event Opening",
      second: "",
    },
  ];
  return (
    <div className={styles.celebrationPageWrapper}>
      <Navbar />
      <div className={styles.CelebrationBody}>
        <div className={styles.flexContent}>
          <div className={styles.textContent}>
            <h1>Download</h1> <br />
            <p>2024 Events images and more</p>
          </div>
          <img src={CelebrationImg} alt="Celebration" />
        </div>
        <BarBox itemList={itemList} />
        <br />
        <br />
        <BarBox itemList={itemList2} />
        <div className={styles.ImageGrid}>
          {images.map((image, index) => (
            <div key={index} className={styles.gridImgBox}>
              <div className={styles.imgBox}>
                <img src={image.src} alt="img" />
              </div>
              <div className={styles.imgBoxActions}>
                <div>
                  <span class="material-symbols-outlined">thumb_up</span>
                </div>
                <div onClick={() => handleDownload(image.src)}>
                  <span class="material-symbols-outlined">download</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
