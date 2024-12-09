import React from 'react';
import styles from './Slider.module.css';

export default function Slider({ assest, type, altText }) {
  return (
    <div className={styles.SliderWrapper}>
      <div className={styles.assestWrapper}>
        {type === "img" ? (
          <img src={assest} alt={altText} />
        ) : type === "video" ? (
          <video src={assest} controls />
        ) : null}
      </div>
    </div>
  );
}
