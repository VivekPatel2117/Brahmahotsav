import React, { useState,useEffect } from "react";
import styles from "./BarBox.module.css";
export const BarBox = ({ onSelect = () => {}, itemList = [] }) => {
   const [isMobile, setIsMobile] = useState(false);
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
  const [selectedDiv, setSelectedDiv] = useState("");
  const handleSelectClick = (index) => {
    onSelect();
    setSelectedDiv(index);
  };
  
  return (
    <div className={styles.BarBoxWrapper}>
      <div style={{display:"grid",gridTemplateColumns: `repeat(${itemList.length},${isMobile ? "25vw": "10vw"})`}} className={styles.Barbox}>
        {itemList.map((item, index) => (
          <div
            onClick={()=>handleSelectClick(index)}
            style={{ backgroundColor: selectedDiv === index ? "rgba(225, 180, 67, 1)" : "" }}
            key={index}
            className={styles.itemBox}
          >
            <p>{item.first}</p>
            <span>{item.second}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
