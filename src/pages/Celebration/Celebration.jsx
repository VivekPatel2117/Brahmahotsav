import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Celebration.module.css";
import BarBox from "../../components/BarBox/BarBox";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default function Celebration() {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [type, setType] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [processedData, setProcessedData] = useState([]);
  const getMedia = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/upload/files`
      );
      if (response.data && response.data.files) {
        setMediaFiles(response.data.files);
        setProcessedData(response.data.files);
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName || "media_file";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    getMedia();
  }, []);

  const itemList = [
    { logical_name:"IMAGE",first: <span className="material-symbols-outlined">image</span>, second: "Image" },
    { logical_name:"VIDEO", first: <span className="material-symbols-outlined">play_circle</span>, second: "Video" },
    { logocal_name:"AUDIO",first: <span className="material-symbols-outlined">music_note</span>, second: "Kirtans" },
  ];

  const itemList2 = [
    { logical_name:"HAR_GHAR_ZULA", second: "Har Ghar Zula" },
    { logical_name:"VRAT_DIXA",second: "Vrat Dixa" },
    { logical_name:"BAL_PRABHU_POOJAN", second: "Bal Prabhu Poojan" },
    { logical_name:"PRAGATYOTSAV", second: "Pragatyotsav" },
    { logocal_name:"MAHA_ABHISHEK", second: "Maha Abhishek" },
    { logocal_name:"EVENT_OPENING", second: "Event Opening" },
  ];
  const updateProcessedData = (selectedMediaType, selectedType) => {
    let filteredData = mediaFiles;
  
    if (selectedMediaType) {
      filteredData = filteredData.filter((file) => file.fileType.includes(selectedMediaType.toLowerCase()));
    }
  
    if (selectedType) {
      filteredData = filteredData.filter((file) => file.fileCategory === selectedType);
    }
  
    setProcessedData(filteredData);
  };
  const handleSelectClick = (name) => {
   setMediaType(name);
  updateProcessedData(name, type);
  }
  const handleTypeSelect = (type) => {
    setType(type);  
    alert(type);
    updateProcessedData(mediaType, type);  
  }
  return (
    <div className={styles.celebrationPageWrapper}>
      <Navbar />
      <div className={styles.CelebrationBody}>
        <div className={styles.flexContent}>
          <div className={styles.textContent}>
            <h1>Download</h1> <br />
            <p>2024 Events images and more</p>
          </div>
        </div>
        <BarBox onSelect={handleSelectClick} itemList={itemList} />
        <br />
        <BarBox onSelect={handleTypeSelect} itemList={itemList2} />
        <div className={styles.ImageGrid}>
          {processedData.length > 0 ? (
            processedData.map((file, index) => (
              <div key={index} className={styles.gridImgBox}>
                <div className={styles.imgBox}>
                  {file.fileType.includes("image") ? (
                    <img src={file.fileUrl} alt={file.fileName} />
                  ) : file.fileType.includes("video") ? (
                    <video controls>
                      <source src={file.fileUrl} type={file.fileType} />
                    </video>
                  ) : file.fileType.includes("audio") && (
                    <audio controls>
                      <source src={file.fileUrl} type={file.fileType} />
                    </audio>
                  )}
                </div>
                <div className={styles.imgBoxActions}>
                  <div>
                    <span className="material-symbols-outlined">thumb_up</span>
                  </div>
                  <div onClick={() => handleDownload(file.fileUrl, file.fileName)}>
                    <span className="material-symbols-outlined">download</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading media files...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
