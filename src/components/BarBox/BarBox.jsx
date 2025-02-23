import React, { useState, useEffect } from "react";
import styles from "./BarBox.module.css";
const BarBox = ({ onSelect = () => {}, itemList = [] }) => {
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
  const handleSelectClick = (name) => {
    setSelectedDiv(name);
    onSelect(name);
  };
  return (
    <div className={styles.BarBoxWrapper}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${itemList.length},${
            isMobile ? "25vw" : "1fr"
          })`,
        }}
        className={styles.Barbox}
      >
        {itemList.map((item, index) => (
          <div
            onClick={() => handleSelectClick(item.logical_name)}
            style={{
              backgroundColor:
                selectedDiv === item.logical_name ? "rgba(225, 180, 67, 1)" : "",
            }}
            key={index}
            className={styles.itemBox}
          >
            {item.first && <p>{item.first}</p>}
            <span>{item.second}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarBox;
