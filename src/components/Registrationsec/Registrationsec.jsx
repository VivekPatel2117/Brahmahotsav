import React from "react";
import styles from "./Registrationsec.module.css";
import { Link } from "react-router-dom";

const Registrationsec = () => {
  return (
    <div className={styles.banner}>
     <Link to="#"> <button className={styles.button}>Registration</button></Link>
      <p className={styles.description}>
        Registration for Brahm Mahotsav Sadhna - Aradhna
      </p>
    </div>
  );
};

export default Registrationsec;
